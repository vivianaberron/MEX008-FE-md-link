const path = require("path");

//Funcion para comprobar que el archivo es Markdown
const isMarkdown = pathFile =>{
    let extFile=path.extname(pathFile);
    // console.log("extension = "+extFile)
    if( extFile ===".md") return "true"
    else return "false"
    }

module.exports= isMarkdown;
