const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require("bcrypt");
 const multer = require('multer');
    // const mongoose = require('mongoose'),
    const uuidv4 = require('uuid');
    var fs = require('fs');


//Course Model
const User = require('../models/users');


// const DIR = '../public/images';
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//         const fileName = file.originalname.toLowerCase().split(' ').join('-');
//         cb(null, uuidv4() + '-' + fileName)
//     }
// });
// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });
 
// var Upload =  upload.single('image');

exports.createUser =(req,res) => {
    

    const newUser = new User({
        name: req.body.name.toLowerCase(),
        location:req.body.location.toLowerCase(),
        phonenumber:req.body.phonenumber ,
        email:req.body.email.toLowerCase() ,
        dob:req.body.dob ,
        gender:req.body.gender.toLowerCase() ,
        occupation:req.body.occupation.toLowerCase(),
        nationality: req.body.nationality.toLowerCase(),
        address:req.body.address.toLowerCase(),
        country: req.body.country.toLowerCase(),
        state:req.body.state.toLowerCase(),
        city:req.body.city.toLowerCase(),
        pincode:req.body.pincode,
        id_type: req.body.id_type.toLowerCase(),
        id_number: req.body.id_number.toLowerCase(),
        img:req.body.img
        
        
    });
    newUser.save((error)=>{
        if(error)
        {
            res.json({status:0,debug_data:error});
        }
        else{
            { id: newUser._id }
            res.json({
                                    newUser: {
                                        id: newUser._id,
                                        name: newUser.name,
                                        email: newUser.email
                                    }
                                });
            // res.json({status:1,data:"newUser created"}
            //     );
            console.log(res.data);
        }
    })
}


exports.loginUser = async (req, res) => {

//

const { phonenumber } = req.body;
    // if(!email || !password){
    //     res.status(400).json({msg: 'Please enter all fields'});
    // }
    // User.findOne({phonenumber}
    //     , function (user) {
    //     if (!user) {
    //         console.log("user exists");
    //         return res.redirect('/login'); // main page url
    //     }
    //     else {
    //         console.log("no exist");
    //       return  res.redirect('/login');
    //     }
    // })
        User.findOne({phonenumber}).then(user => {
            if(!user) { 
                
                res.status(400).json({msg: 'User does not exist'});
                
                
            } else{
                                { id: user._id }
                               res.json({
                               
                                user: {
                                    user_id: user._id,
                                    name: user.name,
                                    phonenumber: user.phonenumber,
                                    id_type:user.id_type,
                                    id_number:user.id_number,
                                    email:user.email
                                        }
                                    }); 
                               }

                               
                                
                            
                            
                        
                    
                
        })

};


exports.listUsers = (request, response) => {
    User.find(function(err, users_list) {
        if(err){
            response.json(err);
        } else {
            // console.log("one:",users_list);
            response.json({status: 1, data: users_list});

        }
    });
};


exports.userformController = function(request,response){

    let completePath = path.join(__dirname+"/../user.html");
    response.sendFile(completePath);
}

exports.DeleteUsers = (request, response) => {
    User.delete(function(err, users_list) {
        if(err){
            response.json(err);
        } else {
            console.log("one:",users_list);
            response.json({status: 1, data: users_list});

        }
    });
};