const mongoose  = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    phonenumber: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    dob: {
        type: Date,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    occupation: {
        type: String,
        require: true
    },
   nationality: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    state: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    pincode: {
        type: Number,
        require: true
    },
    id_type: {
        type: String,
        require: true
    },
    id_number: {
        type: String,
        require: true
    },
    img:
    {
        type: String,
        require: true
    },
    
},
{
    timestamps: true
});


module.exports =mongoose.model('User', UserSchema);


 // image:
 //    {
 //        data: Buffer,
 //        contentType: String
 //    }