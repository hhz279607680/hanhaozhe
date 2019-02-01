var express=require('express').Router();


express.get('/admin', function(req, res, next) {
    // res.send('你好')
    res.render('admin',{title:'类型'})
  });
  
  module.exports = express;
  