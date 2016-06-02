/* MODULES TO LOAD */
var express = require('express');//get express module (starting server)
var multer = require("multer");
var upload = multer({ dest: 'dist/img/' });
var app = express(); //start an instance of express
var mongoose = require('mongoose'); //get mongoose module (connect to db)
var bodyParser = require('body-parser');//get body-parser module (create json)
var cookieParser = require('cookie-parser');//get cookie-parser module (create, edit, delete cookies)
var fs = require('fs');//get fs module (read/write to filesystem)

/* SET PORT (default for browsers is 8003) */
var port = 80;

/* USE MODULES */
app.use(cookieParser());// use module for finding cookies
app.use(express.static("dist"));// tell express where the webiste directory is
app.use(bodyParser.urlencoded({ extended:false }));// set up body-parser to get json
app.use(bodyParser.json());

/* DB STUFF */
/*
mongoose.connect('mongodb://localhost/test');//connect to db
var db = mongoose.connection;//set variable
db.on('error', console.error.bind(console, 'connection error:'));//give error if it can't connect
db.once('open', function() {
});//empty function that runs when server starts
*/

/* SCHEMAS */
//how to save db objects
/*
var testSchema = mongoose.Schema({
    firstItem: String,
    secondItem: Number,
    thirdItem: Date
});
*/

/* MODELS */
//how build db objects
/*
var Test = mongoose.model('Test', testSchema);
*/

/* ROUTES */
//what happens if you run a get request to the main page
app.get('/', function(req, res) {
    res.redirect('/');
});
app.get('/*', function(req, res) {
    var pr = req.params["0"];
    res.redirect('/?in='+pr);
});
//what happens if you run a post request to the main page
app.post('/', upload.single('peanut'), function(req, res) {

//set a cookie
    //res.cookie('cookiename', 'cookievalue');

//delete a cookie
    //res.clearCookie('cookiename');

//make new db object
/*
    var newTest = new Test({
        firstItem: "itemvalue",
        secondItem: 5,
        thirdItem: new Date()
    });
*/
//save new db object
/*
    newTest.save(function(err, newTest) {
        if (err) return console.log(err);
        //log the new saved item
        console.log('saved as:' + newTest);
    });
*/
    res.redirect('/');
});

//output the db info as json
app.post('/db', function(req, res) {
/*
    Test.find(function(err, things) {
        var testlist = [];//create array
        for (x in things) {
            testlist.push(things[x]);//for each item, push it to the array
        };
        res.json(testlist);//spit out the array as json
    });
*/
});


/* START THE SERVER */
app.listen(port, function() {
    console.log("listening on port "+ port);
});
