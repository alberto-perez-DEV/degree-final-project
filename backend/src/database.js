const mongoose = require("mongoose");

// -- DB CONNECTION --

const URI = process.env.MONGODB_URI
                ? process.env.MONGODB_URI
                : "mongodb://localhost/default_db";

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('==> MongoDB connected:', URI);
});