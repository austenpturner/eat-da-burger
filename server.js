// Required Node modules
const express = require('express');
const mysql = require('mysql');
const exphbs = require('express-handlebars');

// Store express methods in "app"
const app = express();

// Define PORT for Heroku and CLI
const PORT = process.env.PORT || 8000;

// Use "public" folder to serve static assets
app.use(express.static("public"));

// Middleware - sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Use handlebars as templating engine - look in "main" folder
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set mysql connection with database info
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: ""
  });
  
// Connect to mysql database
connection.connect( err => {
if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
}
console.log(`connected as id ${connection.threadId}`);
});

// Listen on prior defined PORT
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
