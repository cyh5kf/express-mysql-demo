var express = require('express');
var router = express.Router();
var query = require("../db/DBConfig");
// 响应一个JSON数据
var responseJSON = function (res, ret) {
     if(typeof ret === 'undefined') { 
          res.json({     code:'-200',     msg: '操作失败'   
        }); 
    } else { 
      res.json(ret); 
  }};


/**
 * 查询列表页
 */
router.get('/', function (req, res, next) {
    query('select * from user', function (err, rows) {
        if (err) {
            console.log(err);
        } else {
            // 以json形式，把操作结果返回给前台页面     
            responseJSON(res, rows);
        }
    })
});



module.exports = router;