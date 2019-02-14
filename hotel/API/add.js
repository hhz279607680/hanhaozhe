var router=require('express').Router();
var admin=require('../server/add');

router.post('/adds_add',function(req,res){
    admin.add(req,res);
});
router.post('/adds_select',function(req,res){
    admin.select(req,res);
});
router.post('/select_ID',function(req,res){
    admin.select_ID(req,res);
});
router.post('/updata_',function(req,res){
    admin.updata(req,res);
})
router.post('/delete_',function(req,res){
    admin.deleteList(req,res);
})
module.exports=router;