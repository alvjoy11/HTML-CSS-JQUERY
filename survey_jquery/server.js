var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(request, response) {
 response.render("index");
})
// post route for adding a user
app.post('/results', function(request, response) {
 console.log("POST DATA", request.body);
 response.render("results", request.body);
})


app.listen(8000, function() {
 console.log("Listening on port 8000, have a glass of wine.");
});
