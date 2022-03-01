const express = require("express");
const Students = require("../models/studentmodel");
const Contact = require("../models/contactmodel");
const SignIn = require ("../models/mebership schema/signIn")
const SignUp = require ("../models/mebership schema/signUp")
const router = express.Router();
const mongoose = require("mongoose");
const cors = require("cors");

router.use(express.json());
router.use(
  cors({
    origin: "*",
  }),
);




// router/api for  student registration


router.get("/", async (req, res) => {
  /*   res.header("Access-Control-Allow-Origin", "true");
  crossorigin:true */
  res.status(200).json({ msg: "Welcome to Tech Creek Backend, everything seems okay here...^Jesse" });
});

//using get request to database
router.get("/students", async (req, res) => {
  const student = await Students.find();

  res.status(200).json(student); 
});


//using post request to database 

router.post("/student", async (req, res) => {
  const {
    firstName,
    lastName,
    middleName,
    stateOfOrigin,
    dob,
    education,
    phoneNumber,
    email,
    gender,
    course,
    address,
    lga,
  } = req.body;

  const newStudent = new Students({
    firstName,
    lastName,
    middleName,
    stateOfOrigin,
    dob,
    education,
    phoneNumber,
    email,
    gender,
    course,
    address,
    lga,
  });

  await newStudent.save();

  return res.status(200).json({
    msg: "registration successful",
  });
});


// router/api ends here


//router/api for contacting tech creek at the create page

router.post("/contact", async (req, res) => {
  const {
    fullName,
    email,
    message,
  } = req.body;

  const newContact = new Contact({
    fullName,
    email,
    message,
  });

  await newContact.save();

  return res.status(200).json({
    msg: "message sent successful",
  });
});

// router/api ends here



//router/api for sign in form for tech creek at the membership page

router.post("/signIn", async (req, res) => {
  const {
    email,
    password,
  } = req.body;

  const newSignIn = new SignIn({
    email,
    password,
  });

  await newSignIn.save();

  return res.status(200).json({
    msg: "sign in successfully",
  });
});

// router/api ends here


//router/api for sign up form for tech creek at the membership page

router.post("/signUp", async (req, res) => {
  const {
    newFullName,
    newEmail,
    newPassword,
    category
  } = req.body;

  const newSignUp = new SignUp({
    newFullName,
    newEmail,
    newPassword,
    category
  });
 
  await newSignUp.save();

  return res.status(200).json({
    msg: "sign up successfully",
  });
});

// router/api ends here


module.exports = router;
