var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

// create the express app
var app = express();
app.set('views', path.join(__dirname, './client/views')); //this tells our app where our view folder is.
app.set('view engine', 'ejs');
// app config should be underneath our app declaration.
require("./server/config/mongoose.js"); //this runs mongoose.js

app.use(bodyParser.urlencoded({ extended: true })); // app.use ---> we call this middleware.
app.use(express.static(path.join(__dirname, "./client/static")));

// store the function in a variable
var routes_setter = require("./server/config/routes.js");
routes_setter(app); // invoke function stored above.. and pass to "app" variable


app.listen(8000, function() {
 console.log("Listening on port 8000, have some chocolate!");
});
