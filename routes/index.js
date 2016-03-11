var router = require('express').Router();
var Promise = require('bluebird');
var db = require("../models/models.js");
var Hotel = db.models.Hotel;
// console.log(Hotel);
var Restaurant = db.models.Restaurant;
var Activity = db.models.Activity;
var Place = db.models.Activity;

module.exports = router;

router.get('/', function(req, res){
  var findArray = [
    Hotel.find({}),
    Restaurant.find({}),
    Activity.find({})
  ];
  Promise.all(findArray)
    .then(function(results){
      res.send(results);
    })
    .catch(function(err){
      res.render('error',err);
    });

  // res.send('Hello world');
  // res.render('index', {});
});
