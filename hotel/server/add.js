var db=require('../db/db');
var article = {
    add(req, res) {
        // res.setHeader()
        //get取请求用query
        //post取请求用body
        db.insert('address', req.body, function (e) {
            res.send(e);
        })
    },
    select(req,res){
        db.select('address',function (e) {
           res.send(e); 
        })
    },
    selectByFid(req,res){
        db.selectWhere('address',{fid:res.query['fid_']},function(e){
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
        db.select_ID('address',req.body,function(e){
            res.send(e);
        })
    },
    //修改
    updata(req,res){
        db.updata('address',req.body,function(e){
            res.send(e);
        })
    },
    //删除
    deleteList(req,res){
        db.delete_('address',req.body,function(e){
            res.send(e);
        })
    },
}
module.exports=article