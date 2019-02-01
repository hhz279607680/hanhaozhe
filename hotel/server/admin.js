var db=require('../db/db');
var article = {
    add(req, res) {
        // res.setHeader()
        //get取请求用query
        //post取请求用body
        db.insert('article', req.body, function (e) {
            res.send(e);
        })
    },
    select(req,res){
        db.select('article',function (e) {
           res.send(e); 
        })
    },
    selectByFid(req,res){
        db.selectWhere('article',{fid:res.query['fid_']},function(e){
            res.send(e);
        })
    },
    select_Back(req,res){
        
        db.select_back(req.body['tableName'],function(e){
            res.send(e);
        })
    }
}
module.exports=article