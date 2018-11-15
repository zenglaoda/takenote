const mysql = require('mysql');
const dbConfig = require('./../config/db_config');


//连接
let connection = null;

function getConnection(pool){
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,connect)=>{
            if(err){
                reject(err);
            }else{
                resolve(connect);
            }
        });
    })
}

class Mysql{
    constructor(database){
        this.database = database;
    }

    //查询
    async execQuery(args = {}){
        let sql = args['sql'];
        let query = args['query'];
        if(!query) query = [];
        if(!sql) {
            throw new Error('sql is error!');
        }

        if(!connection){
            let db = dbConfig[this.database]; 

            if(!db){
                this.database = 'db_blog';
                db = dbConfig[this.database];
            } 
            let connectionPool = mysql.createPool(db);
            connection = await getConnection(connectionPool);
        }

        return new Promise((resolve,reject)=>{
            connection.query(sql,query,(err,result)=>{
                if(err){
                    reject(err);                    
                }else{
                    resolve(result);                            
                }
            }); 
        });
    }

    release(fn){
        connection.release(fn)
    }
}

module.exports = Mysql;

/*
    参考网址:
        https://blog.csdn.net/ErErFei/article/details/68060551?utm_source=blogxgwz1

    问题:
        1.一个连接池中是否只有一个连接
        2.如何正确的释放一个连接，在何时释放
        3.是否可以创建多个连接池
    一.创建一个连接池
        var mysql = require('mysql');
        var pool = mysql = createPool({//创建连接池
            host : 'localhost',
            user : 'we',
            password : 'pass',
            database : 'db'
        })
    
    二.从连接池中打捞并获取一个连接
        pool.getConnection((err,connection)=>{
            connection.query((err,result)=>{
                //dosomething
            });
        });
    
    三.将一个连接放回连接池
        pool.getConnection((err,connection)=>{
            connection.query((err,result)=>{
                //dosomething
            });
            connection.release();//释放连接
        });      

    四.彻底从连接池删除一个连接
        connection.destroy();

    五.结束数据库连接
        结束数据库连接end()和destroy()
        end()接受一个回调函数，并且会在query结束之后才触发，如果query出错，仍然会终止链接，错误会传递到回调函数中处理。
        destroy()立即终止数据库连接，即使还有query没有完成，之后的回调函数也不会在触发。
    
    六.连接池集群
        允许不同的host链接
        var poolCluster = mysql.createPoolCluster();

    七.切换用户/改变连接状态
        connection.changeUser({user : 'john'}, function(err) {
            if (err) throw err;
        });
        
*/