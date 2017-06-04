// MySQL数据库联接配置
var mysql=require("mysql");  
var pool = mysql.createPool({ 
		host: 'localhost', 
		user: 'root',
		password: '',
		database:'test_db', // 前面建的user表位于这个数据库中
		port: 3306
})

var query=function(sql,callback){  
    pool.getConnection(function(err,connection){  
        if(err){  
            callback(err,null,null);  
        }else{  
            connection.query(sql,function(qerr,vals){  
                //释放连接  
                connection.release();  
                //事件驱动回调  
                callback(qerr,vals);  
            });  
        }  
    });  
}; 
module.exports=query; 
 