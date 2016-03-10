var mongoose = require('mongoose');

var placeSchema = mongoose.Schema({
    address: String,
    city: String,
    state: String,
    phone: String
});

var Place = mongoose.model('place', placeSchema);

var hotelSchema = mongoose.Schema({
  name: String,
  place: placeSchema
});

var Hotel = mongoose.model('hotel', hotelSchema);

module.exports = {
  connect: function(){

  },
  models: {
    Place: Place,
    Hotel: Hotel
  }
};
