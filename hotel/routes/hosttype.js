var express=require('express').Router();


express.get('/type', function(req, res, next) {
    res.send('你好')
    // res.render('hosttype',{title:'类型'})
  });
  
  module.exports = express;
  