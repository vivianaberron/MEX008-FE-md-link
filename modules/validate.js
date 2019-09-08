const fetch = require('node-fetch');

//Funcion que valida si los links esta disponibles haciendo una peticion http
const validate = array => {
    let arr = array.map(obj => { 
        return fetch(obj.href)
        .then( res => { 
            if(res.status===200){
                obj.status= "ok"
                return obj;
            }
            if(res.status===404){   
                obj.status= "fail"
                return obj;
            }  
        })
        .catch(()=>console.log("error en validate"))
    })
return Promise.all(arr) 
}

module.exports= validate;