var adminRouter=require('./admin');
var userRouter=require('./users');
var objRouter={
  '/users':userRouter,
  '/admin':adminRouter,
}
module.exports=objRouter