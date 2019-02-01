var mysql = require('mysql');
var dbconfig = require('./db_config');


var pool = mysql.createPool(dbconfig);
var query = (sql, callback) => {
    pool.getConnection(function(err, conn) {
        if (err) {
            console.log('error');
        } else {
            conn.query(sql, function(err, result) {
                if (err) {
                    console.log('sql error');
                    console.log(err);
                }
                // console.log(result);
                callback(result);
            })
        }
        // conn.release();
        pool.releaseConnection(conn);
    });
}



// query('select * from user', function(result) {
//     console.log(result);
// })


var obj = { code: 0, msg: '', data: [] };

// var data = {
//     typename: 123,
//     fid: 0
// };
// var data1 = {
//         username: 123,
//         password: 234,
//         phonenum: 123
// }
function format_data(code, msg, data = [],count=3) {
    // var json = `{code:${code},msg:${msg},data:${data}}`;
    var json_obj = { code, msg, data,count };

    return JSON.stringify(json_obj);
}

// 插入数据
function insert(tabname, data, callback) {
    let keys = '';
    let values = '';
    for (let i in data) {
        keys += i + ',';
        values += `'${data[i]}'` + ',';
    }
    keys = keys.substring(0, keys.length - 1);
    values = values.substring(0, values.length - 1);
    var sql = `insert into \`${tabname}\` (${keys}) values(${values})`;
    // console.log(sql);
    query(sql, function(res) {
        var json = '';
        if (res) {
            json = format_data(0, '新增数据成功');
        } else {
            json = format_data(1, '新增失败');
        }
        callback(json);
    });

}

function select(tabname, callback) {
    let sql = `select * from \`${tabname}\``;
    query(sql, function(res) {
        var json = '';
        if (res) {
            json = format_data(0, '查询数据成功', res);
        } else {
            json = format_data(1, '查询失败');
        }
        callback(json);
    });
}


function select_back(tabname, callback) {
    let sql = `select * from \`${tabname}\` ORDER BY id DESC`;
    query(sql, function(res) {
        var json = '';
        if (res) {
            json = format_data(0, '查询数据成功', res);
        } else {
            json = format_data(1, '查询失败');
        }
        callback(json);
    });
}

// { fid:1}
// {fid:1,username:'1',password:1}
function selectWhere(tabname, data, callback) {
    let where_ = '';
    for (var i in data) {
        where_ += `${i}='${data[i]}' and `
    }
    where_ += '1';
    let sql = `select * from \`${tabname}\` where ${where_}`;
    query(sql, function(res) {
        var json = '';
        if (res) {
            json = format_data(0, '查询数据成功', res);
        } else {
            json = format_data(1, '查询失败');
        }
        callback(json);
    });   
}
function renderList(tabname,data,callback){
    let sql = `select * from \`${tabname}\``;
    query(sql, function(res) {
        var json = '';
        if (res) {
            json = format_data(0, '查询数据成功', res);
        } else {
            json = format_data(1, '查询失败');
        }
        callback(json);
    });   
}
module.exports = { insert, select, selectWhere,select_back,renderList }