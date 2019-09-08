const readFile= require("./readFile.js");
const isMarkdown= require("./isMarkdown.js");
const getLinks= require("./getLinks.js");
const validateLinks= require("./validate.js");
const stats = require("./stats.js")
const fs= require ("fs")
const isDir= require("./isDir.js")

//Funcion principal mdlinks 
const mdLinks=(pathFile,option1,option2)=>{
    let typePath=  fs.statSync(pathFile).isFile();
        const promise =new Promise((resolve)=>{
            //La ruta es un archivo
            if(typePath ===true){  
                //El archivo es markdown 
                if (isMarkdown(pathFile)==="true"){ 
                    let data= readFile(pathFile);
                    //Resolver para stats
                    if(option1==="--stats"||option2 ==="--stats") {
                        let arrLinks = getLinks(data,pathFile)
                        resolve(stats(arrLinks))
                    } 
                    //Resolver paara validate
                    if(option1==="--validate"||option2 ==="--validate"){
                        let arrLinks = getLinks(data,pathFile)
                        resolve(validateLinks(arrLinks))
                    }    
                    else{
                        resolve(getLinks(data, pathFile));
                    }
                }  
                //El archivo no es mardown    
                else {
                reject(`El archivo no es markdown `)
                }
            }
            //La ruta es un directorio
            else {
                console.log("Ya entro a checar directorios")
                resolve (isDir(pathFile).forEach( path => { 
                    let data= readFile(path);
                    console .log ( getLinks(data, path));
                }))
                // arr.map( file=>{
                //     let newPath=``
                //     newPath=`${pathFile}${file}`
                //     console.log(newPath)
                // })
            }
        })    
    return promise;
}

module.exports= mdLinks;