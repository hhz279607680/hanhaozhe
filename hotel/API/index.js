var adminRouter=require('./admin');
var hosttypeRouter=require('./hostmoney');
var roomtypeRouter=require('./roomtype');
var roomRouter=require('./room');
var addRouter=require('./add');
var customRouter=require('./custom');
var objRouter={
    '/admin':adminRouter,
    '/hostmoney':hosttypeRouter,
    '/roomtype':roomtypeRouter,
    '/room':roomRouter,
    '/add':addRouter,
    '/custom':customRouter
}
module.exports=objRouter;