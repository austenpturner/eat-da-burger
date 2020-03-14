// Require mysql node module
const mysql = require('mysql');

let connection;

// Set mysql connection with database info
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Apt0718!",
        database: "burgers_db"
    });
};

// Connect to mysql database
connection.connect( err => {
if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
}
console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;
