const fs = require('fs');
const path = require('path');
const view = path.resolve(__dirname,'../view/');
module.exports = {
    print(name,data){
        if(!name) name = test.json;
        data = JSON.stringify(data);
        fs.writeFile(view+'/'+name,data,(err)=>{
            if(err){
                console.log(err);
            }
        });
    }
};
