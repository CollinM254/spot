const mongoose = require("mongoose");
require("dotenv").config();

// Debug: Log the DB_PATH to check it's loaded correctly
console.log("DB_PATH:", process.env.DB_PATH);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Time in milliseconds to wait for the server to respond
    socketTimeoutMS: 20000, // Keep sockets open for 20 seconds; increase if necessary
    bufferCommands: false, // Disable buffering; not recommended for production unless necessary
};

mongoose.connect(process.env.DB_PATH, options)
    .then(() => console.log("Connection to database was successful"))
    .catch(err => {
        console.error("Connection error: ", err.message);
    });

// const mongoose = require("mongoose");
// require("dotenv").config();
// // Debug: Log the DB_PATH to check it's loaded correctly
// console.log("DB_PATH:", process.env.DB_PATH);

// mongoose.connect(process.env.DB_PATH, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("Connection to database was successful"))
//     .catch(err => {
//         console.error("Connection error: ", err.message);
//     });

// const mongoose = require("mongoose");
// require("dotenv").config();

// mongoose
//     .connect(process.env.DB_PATH)
//     .then(
//         (res) => {
//             console.log("Connection to database was successful");
//         },
//         (err) => {
//             console.error("Oops! Failed to connect with database");
//         }
//     )
//     .catch((err) => {
//         console.error("Oops! Failed to connect with database");
//     });