console.log("Application Started");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require("mongoose");

const bodyParser = require('body-parser');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRuter = require('./routes/admin');

var gallery1Ruter = require('./routes/gallery1');
var enquiryRuter = require('./routes/enquirey');
var sprayservicesenquiryRuter = require('./routes/sprayservicesenquiry');
var contactusRuter =require('./routes/contactus');
var subscribeRuter = require('./routes/subscription');
var trainingregistrationRuter = require('./routes/trainingregistration');
var catlogdownloadRuter = require('./routes/catlogdownload');
var testimonialRuter = require('./routes/testimonials');
var galleryRuter = require('./routes/gallery');
var iframelinkRuter = require('./routes/iframelinks');
var careersRuter = require('./routes/careers');
var careerVacancyRuter = require('./routes/careerVacancy');
var razorpayRoutes = require("./routes/razorPay");
var visitorsRoutes = require("./routes/visitors");

var app = express();



// Parses urlencoded bodies
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb', extended: true}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));

// Set EJS as templating engine 
app.set("view engine", "ejs");


let mongoConnUrl = "mongodb+srv://multiplexdrone:multiplexdrone@cluster0.tcwmxfm.mongodb.net/multiplexdrone?retryWrites=true&w=majority";
mongoose.connect(mongoConnUrl, { useNewUrlParser: true });
let db = mongoose.connection;
db.on("error", function (error) {
  console.log("Error came in connecting" + error);
});
db.on("open", function () {
  console.log(`yes, we are connected to mongodb and the database`);
});


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin',);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
/*app.use(express.static(path.join(__dirname, '/client')));

// for connecing frontend in heroku
app.use(express.static(path.join(__dirname, 'client','build')));*/

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, './client/build'));
// });

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin',adminRuter);
app.use('/gallery1',gallery1Ruter);
app.use('/enquiry',enquiryRuter);sprayservicesenquiryRuter
app.use('/sprayservicesenquiry',sprayservicesenquiryRuter);
app.use('/contactusenquiry',contactusRuter);
app.use('/subscribe',subscribeRuter);
app.use('/trainingregistration',trainingregistrationRuter);
app.use('/catlogdownload',catlogdownloadRuter);
app.use('/testimonials',testimonialRuter);
app.use('/gallery',galleryRuter);
app.use('/iframelinks',iframelinkRuter);
app.use('/careers',careersRuter);
app.use('/careervacancy',careerVacancyRuter);
app.use("/razorpay", razorpayRoutes);
app.use("/visitors", visitorsRoutes);

//For cors error-policy
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.disable('etag');

// // for heroku deployment
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/public"));
// }
// //app.use(routes);
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });

app.use(express.static(__dirname + "/client"));
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // lik our main.js file or main.css file
  app.use(express.static("client/build"));
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//const PORT = process.env.PORT || 4003;

//app.listen(PORT,()=>console.log("connected to server"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// mongodb+srv://jaidevk:<password>@cluster0.kmhzh.mongodb.net/?retryWrites=true&w=majority

// mongodb://localhost/deltinuser
//mongodb://localhost:27017
//mongodb+srv://multiplexdrone:multiplexdrone@cluster0.tcwmxfm.mongodb.net/?retryWrites=true&w=majority
//mongodb://jaidevk:4AL15ME715@cluster0-shard-00-00.kmhzh.mongodb.net:27017,cluster0-shard-00-01.kmhzh.mongodb.net:27017,cluster0-shard-00-02.kmhzh.mongodb.net:27017/?ssl=true&replicaSet=atlas-9xqepa-shard-0&authSource=admin&retryWrites=true&w=majority";