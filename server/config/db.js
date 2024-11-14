const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to db:", err);
    } else {
        console.log("Database connected successfully.");
    }
});

// Export the connection directly, not as an object
module.exports = db;
