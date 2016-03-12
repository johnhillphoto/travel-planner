var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var path = require('path');
// var sass = require('node-sass-middleware'); // call sass-middleware - dev

swig.setDefaults({cache: false});

var routes = require('./routes');

var app = express();
app.use(require('method-override')('_method'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/vendor', express.static(path.join(__dirname, 'bower_components')));
// app.use('/views', express.static(path.join(__dirname, 'views')));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+'/views');
app.use('/', routes);

// middleware to compile sass on changes
// app.use(sass({
//   src: __dirname + '/assets',
//   dest: __dirname + '/public',
//   debug: true,
//   outputStyle: 'compressed'
// }));



app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// custom error handling to remove stack trace
app.use(function (err, req, res, next) {
    console.log('      ' + err);
    // res.status(err.status || 500).end();
    res.render('error', {error:err});
});

app.listen(3000, function(){
  console.log("We have a Travel Planner server running on port 3000");
});

// module.exports = app;
