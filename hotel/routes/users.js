var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newstype/index1',{title:'类型'})
});

module.exports = router;
