// npm install express mongoose body-parser path express-session
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');
app.use(express.static( __dirname + '/public/dist/public' ));
// app.use(bodyParser.urlencoded({extended: true})); 


require("./server/config/routes.js")(app);
require('./server/config/mongoose.js')

app.listen(8000, function() {
    console.log("listening on port 8000");
})