// Required Node modules
const express = require('express');
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

// Require router
const routes = require('./controllers/burger_controller');

app.use(routes);

// Listen on prior defined PORT
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
