var router=require('express').Router();
var admin=require('../server/admin');

router.post('/admin_add',function(req,res){
    admin.add(req,res);
});
router.post('/admin_select',function(req,res){
    admin.select(req,res);
});
router.post('/select_ID',function(req,res){
    admin.select_ID(req,res);
})
module.exports=router;