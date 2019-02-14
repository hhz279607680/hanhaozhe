var adminRouter=require('./admin');
var userRouter=require('./users');
var hosttypeRouter=require('./hosttype');
var objRouter={
  '/users':userRouter,
  '/admin':adminRouter,
  '/housttype':hosttypeRouter
}
module.exports=objRouter