var router = require('express').Router();
var Promise = require('bluebird');
var db = require("../models/models.js");
var Hotel = db.models.Hotel;
// console.log(Hotel);
var Restaurant = db.models.Restaurant;
var Activity = db.models.Activity;
var Place = db.models.Activity;

module.exports = router;

console.log('hello');
Hotel.find({})
.then(function(res){
  console.log(res);
});
