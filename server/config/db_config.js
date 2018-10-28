const defaultConfig = {
    host:'127.0.0.1',
    port:'3306',
    connectionLimit:10,             //最大连接数. (Default: 10)
	queueLimit:0                    //连接池中连接请求的烈的最大长度，超过这个长度就会报错，值为0时没有限制. (Default: 0)
    
};

const db_blog = {
    user:'root',
    password:'814595325',
    database:'db_blog',
};

exports.db_blog = Object.assign(defaultConfig,db_blog);
