var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var path = require('path');
swig.setDefaults({cache: false});

var routes = require('./routes');

var app = express();
app.use(require('method-override')('_method'));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
// app.use('/views', express.static(path.join(__dirname, 'views')));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname+'/views');
app.use('/', routes);

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
