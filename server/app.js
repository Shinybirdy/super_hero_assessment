var express = require('express');
var app = express();
var path = require ('path');

var bodyParser = require('body-parser');
app.use( bodyParser.json());
//mongoose.connect('')
var mongoose = require('mongoose');
mongoose.connect( 'localhost:27017/mySuperPersondb' );

var returnedModel = require('../models/heroModels.js');

//spin up server - using nodemon server/app.js
var server = app.listen(4242, function(){
  var port = server.address().port;
  console.log("The server is listening on port 4242, darling...");
  //it works!!!
});

//base url & index
app.get('/', function( req,res){
  console.log('in base url---sweeeeeet');
  res.sendFile(path.resolve( 'server/public/views/index.html' ));
});

//addHeroes route
app.post('/addHero', function( req,res ){
  //does this work??YES.
  console.log('in addHero on app.js  ' + req.body.alias);
  var heroToSave={
    alias:req.body.alias,
    first_name:req.body.fName,
    last_name: req.body.lName,
    city: req.body.city,
    power:req.body.power_name
  };
  var newHero = returnedModel ( heroToSave );
  newHero.save();
  res.send( true );
});
app.use( express.static( 'server/public' ));
