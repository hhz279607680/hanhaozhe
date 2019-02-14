var db=require('../db/db');
var host={
    add(req, res) {
        // res.setHeader()
        //get取请求用query
        //post取请求用body
        db.insert('money', req.body, function (e) {
            res.send(e);
        })
    },
    select(req,res){
        db.select('money',function (e) {
           res.send(e); 
        })
    },
    selectByFid(req,res){
        db.selectWhere('money',{fid:res.query['fid_']},function(e){
            res.send(e);
        })
    },
    select_Back(req,res){
        db.select_back(req.body['tableName'],function(e){
            res.send(e);
        })
    },
    updata_(req,res){
        db.updata('money',req.body,function(e){
            res.send(e);
        })
    },
    deleteList(req,res){
        db.delete_('money',req.body,function(e){
            res.send(e);
        })
    },
}
module.exports=host;