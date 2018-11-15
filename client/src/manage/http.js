import axios  from "axios";
import blogHttp from "./../https/blog_http";

axios.defaults.baseURL = 'http://localhost:3000';

let httpConfig = Object.assign({},blogHttp);
let http = {};

for(let urlName in httpConfig){
    let item = httpConfig[urlName];
    let method = item.method.toLowerCase();
    let url = item.url;
    
    http[urlName] = function(data){
        return axios({
            method : method,
            url : url,
            data : data,
        }).catch((err)=>{
            console.log(err);
        })
    } 
}


export default http;