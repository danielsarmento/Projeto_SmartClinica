const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => {
    mongoose.connect(process.env.URI_DB, {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {
        console.log('Servidor conectado ao MongoDB');
    }).catch((e) => console.log(e));
};

module.exports = connectDB;