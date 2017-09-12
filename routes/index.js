var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send("hello world index");
  res.render('index', { title: 'Express',mdata:'mydata' });
});

module.exports = router;
