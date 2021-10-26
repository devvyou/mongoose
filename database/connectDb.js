// Requiring modules
const mongoose = require('mongoose');
const mongoose__api__key = '';


// connectDb is an Asynchronous function that will be exported in app.js
const connectDb = async () => {

    // Options to avoid deprecations in mongodb
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }

    // try/catch block is essential when you use the async/await syntax 
    try {
        await mongoose.connect(mongoose__api__key, options, () => {
            console.log('Successfully connected to MongoDb');
        })
    } catch (error) {
        throw new Error(error);
    }

}

// Exports the connectDb function everywhere you want.
module.exports = connectDb;