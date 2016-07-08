/*
// Packages
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// Routes
var router = express.Router();

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);*/
"use strict";

import express from "express";

let users = [{id:1, name: "alex"}, {id:2, name: "momo"}];
var i = 0;
for (i of users){
  console.log("ELEMENT",i);
}

let user = users.find(u => u.id === 1);

console.log(`Hello, ${ user.name }!`);