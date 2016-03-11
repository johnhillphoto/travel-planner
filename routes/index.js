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
    Hotel.find({}).then(function(_dbHotels){
      return _dbHotels;
    }),
    Restaurant.find({}).then(function(_dbRestaurant){
      return _dbRestaurant;
    }),
    Activity.find({}).then(function(_dbActivity){
      return _dbActivity;
    })
  ];
  Promise.all(findArray)
    .then(function(results){
      // res.send(results[2]);
      res.render('index', {hotels: results[0], restaurants: results[1], activities: results[2]});
    })
    .catch(function(err){
      res.render('error',err);
    });
});

// router.get('/', function(req, res, next){
//   Activity.find({})
//   .then(function(hotels){
//       console.log(hotels);
//       res.render('index');
//   })
//   .then(null,next);
//
//
//   // res.send('Hello world');
//   // res.render('index', {});
// });
