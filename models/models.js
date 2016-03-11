var mongoose = require('mongoose');

var numChecker = function(num){
  // console.log(this);
  // console.log(num);
  if(num>0 && num<6){
  return true;}
  return false;
};

var placeSchema = mongoose.Schema({
    address: String,
    city: String,
    state: String,
    phone: String,
    location: [Number]
});

var Place = mongoose.model('place', placeSchema);

var hotelSchema = mongoose.Schema({
  name: String,
  place: placeSchema,
  num_stars: {
    type: Number,
    validate: {
      validator: numChecker,
      message: '{VALUE} is not a valid number of stars'
    }
  },
  amenities: String
});

var Hotel = mongoose.model('hotel', hotelSchema);

var restaurantSchema = mongoose.Schema({
  name: String,
  place: placeSchema,
  cuisine: String,
  price: {
    type: Number,
    validate: {
      validator: numChecker,
      message: '{VALUE} is not a valid number of dollar signs'
    }
  }
});

var Restaurant = mongoose.model('restaurant', restaurantSchema);

var activitySchema = mongoose.Schema({
  name: String,
  place: placeSchema,
  age_range: String
});

var Activity = mongoose.model('activity', activitySchema);

module.exports = {
  connect: function(){

  },
  models: {
    Place: Place,
    Hotel: Hotel,
    Restaurant: Restaurant,
    Activity: Activity
  }
};
