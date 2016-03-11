var router = require('express').Router();
module.exports = router;

router.get('/', function(req, res){
  // res.send('Hello world');
  res.render('index', {});
});
