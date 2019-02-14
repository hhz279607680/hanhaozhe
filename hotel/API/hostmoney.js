var router=require('express').Router();
var money=require('../server/hostmoney');

router.post('/money_add',function(req,res){
    money.add(req,res);
});
router.post('/money_select',function(req,res){
    money.select(req,res);
});
router.post('/money_updata',function(req,res){
    money.updata_(req,res);
});
router.post('/delete_',function(req,res){
    money.deleteList(req,res);
})
module.exports=router;