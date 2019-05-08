var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;
// making application and json parser
// var jsonParser = bodyParser.json()

// making the urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

// creating application 
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse various custom types of JSOn
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse the HTML  body into a string
app.use(bodyParser.text({ type: 'text/html' }))

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function () {
    console.log("app listening on PORT:" + PORT);
});