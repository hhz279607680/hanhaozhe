var db=require('../db/db');
var host={
    add(req, res) {
        // res.setHeader()
        //get取请求用query
        //post取请求用body
        db.insert('roomtype', req.body, function (e) {
            res.send(e);
        })
    },
    select(req,res){
        db.select('roomtype',function (e) {
           res.send(e); 
        })
    },
    selectByFid(req,res){
        db.selectWhere('roomtype',{fid:res.query['fid_']},function(e){
            res.send(e);
        })
    },
    select_Back(req,res){
        db.select_back('roomtype',function(e){
            res.send(e);
        })
    },
    updata_(req,res){
        db.updata('roomtype',req.body,function(e){
            res.send(e);
        })
    },
    deleteList(req,res){
        db.delete_('roomtype',req.body,function(e){
            res.send(e);
        })
    },
}
module.exports=host;