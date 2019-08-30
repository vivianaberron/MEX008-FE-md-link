const path = require('path');//modulo path de node.js
const fs = require('fs');//modulo file system de node.js

//Funcion que lee el archivo y devuelve el contenido en forma de string 
const readFile= (pathFile) => {
    //Crea un promesa
    const promise = new Promise ((resolve, reject) => {
        //Funcion que lee el archivo
        fs.readFile(pathFile, "utf-8", async (err, data) => {
            if(err) {
            console.log('error: ', err);
            //Llamamos a reject(...) cuando lo que estamos haciendo falla
            reject(err);
            } else {
            // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito
            // Devuelve el texto dentro del archivo 
            resolve(data); 
            }
        })
    });
    return promise; //retorna la promesa
}

//Funcion que halla los links del markdown 
const getLinks=(data)=>{
    const regex = /\[(.+)\]\((https?.+)\)/gm;
    let match; // Match es un arreglo con los elementos [text y url , text , url ,,index , input]
    let count=0;
    let arrLink=[];
    while((match = regex.exec(data)) !== null) {
    //  console.log("indice de m: "+m.index) //primer caracter que coindice con Regex es decir ("[")
    //  console.log("indice de regex: "+regex.lastIndex)//ultimo caracter que coincide con Regex(")")
        let objLink={
            href: match[1], //Texto del linl
            text: match[2]  //URL 
        }
        count++;
        arrLink.push(objLink);
        // return arrLink;
        // console.log(arrLink);
    }
    console.log(arrLink);
    // console.log(`El archivo tiene ${count} links`);
    if((match = regex.exec(data)) === null){
         console.log(`El archivo .md no contiene ningun link`)
    }
    // console.log(arrLink)
}

//Funcion principal mdlinks 
let mdLinks=(pathFile)=>{ 
    let extFile=path.extname(pathFile);
    if( extFile ===".md"){
        //Crea una nueva promesa
        const promise = new Promise ((resolve, reject) => {
        //resuelva la promesa    
        resolve(readFile(pathFile)) 
        //no se resuelve la promesa
        reject("No salio")   
        return promise;
    })
    //maneja el valor que retorna la promesa resuelta
    .then(data=>getLinks(data))
    }
    else{
    console.log(`ERROR: El archivo introducido no es una Markdown tiene extension ${extFile} introduce un archivo con extension .md`)        
    }
}

mdLinks("./README.md");
//CLI para poder usar la informacion en 
//spread operator
//args .env
//