//创建xhr对象
function createXHR(){
    let xhr = null;
    if(window.XMLHttpRequest){
        xhr = new window.XMLHttpRequest();
    }else{
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhr;
}

//校验请求方式
function checkMethod(method){
    let methods = ['GET','POST'];

    if(!method){
        throw new Error('请输入正确的请求方式!');               
    }
    method = String(method).trim().toUpperCase();

    if(methods.includes(method)){
        return method;
    }else{
        throw new Error('请输入正确的请求方式!');                       
    }
}

//校验请求地址
function checkUrl(url){
    if(!url){
        throw new Error('请输入格式正确的请求地址!');
    }
    return url;
}
//格式化请求地址
function formatUrl(url,method,data){
    if(method == 'GET'){

    }else{

    }
}

function ajax(method,url,data,options){
    return new Promise((resolve,reject)=>{
        let xhr = null;
        method = checkMethod(method);
        url = checkUrl(url);
        url = formatUrl(url,method,data);
        xhr = createXHR();
        xhr.open(method,url,true);    
        xhr.responseType = 'application/json';
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if((xhr.status == 200 && xhr.status < 300) || xhr.status == 304){
                    resolve(xhr.responseText);
                }else{
                    reject(xhr.response);                    
                }
            }
        }
        if(xhr.method == 'POST'){
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send();  
            xhr.send(JSON.stringify(data));          
        }
    });
}


