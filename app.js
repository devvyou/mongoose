// Requiring modules 
const express = require('express'),
    mongoose = require('mongoose'),
    connDb = require('./database/connectDb'),
    PORT = 3000,
    app = express(),


    /*
        The mongoose API Key will be
        given to you when you create a cluster in MongoDb Atlas
    */

    mongoose__api__key = process.env.MONGOOSE_API_KEY;


//! ASYNC IIFE
//* IIFE = Immediately Invoked Function Expression
(async () => {
    try {
        await mongoose.connect(mongoose__api__key, options, () => {
            console.log('Successfully connected to MongoDb');
        })
    } catch (error) {
        throw new Error(error);
    }
})();


/*
    If you want to modularize the code,
        - uncomment the ASYNC IIFE above: 
        - uncomment the mongoose package in this file(app.js)
        - uncomment the line of code below,
*/
// (async () => await connDb());


// Listening, in this case, on port 3000
app.listen(PORT, () => {
    console.info('Listening on port: ', PORT);
});



// -------------------
// Made by @devvyou 
// -------------------