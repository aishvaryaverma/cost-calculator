const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })

        console.log('mongoDB connected...');
    } catch (err) {
        console.error(err);

        // Exit the proccess
        process.exit(1);
    }
}

module.exports = connectDB;