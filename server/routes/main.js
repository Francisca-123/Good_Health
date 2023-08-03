// Routes for all pages to go here

const express = require("express");
const router = express.Router();
const post = require('../models/post')


//this is where all the routes should go
router.get('/home', (req, res) => {
    res.render("index")
});

// login page
router.get('/login', (req, res) => {
    res.render("login")
});

// sign up page
router.get('/signup', (req, res) => {
    res.render("signup") 
});

 module.exports = router