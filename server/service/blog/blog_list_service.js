const Mysql = require("../../framework/verdor/mysql");

class Blog extends Mysql{
    constructor(){
        let database = 'db_blog';
        super(database);
    }

    async getBlogList(){
        let res = await this.execQuery({
            sql:'select * from tb_blog'
        });
        return res;
    }
}

module.exports = Blog;