var db=require('../db/db');
var article = {
    add(req, res) {
        // res.setHeader()
        //get取请求用query
        //post取请求用body
        db.insert('room', req.body, function (e) {
            res.send(e);
        })
    },
    select(req,res){
        db.select('room',function (e) {
           res.send(e); 
        })
    },
    selectByFid(req,res){
        db.selectWhere('room',{fid:res.query['fid_']},function(e){
            res.send(e);
        })
    },
    select_Back(req,res){
        
        db.select_back(req.body['tableName'],function(e){
            res.send(e);
        })
    },
    //根据ID查询数据
    select_ID(req,res){
        db.select_ID('room',req.body,function(e){
            res.send(e);
        })
    },
    //修改
    updata_(req,res){
        db.updata('room',req.body,function(e){
            res.send(e);
        })
    },
    deleteList(req,res){
        db.delete_('room',req.body,function(e){
            res.send(e);
        })
    },
}
module.exports=article