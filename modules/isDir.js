const fs= require("fs");
const isMarkdown= require("./isMarkdown.js");
// const readFile= require("./readFile.js");
// const getLinks= require("./getLinks.js");

const isDir=(pathFile)=>{
    // console.log(pathFile)
                // let arrFiles=fs.readdirSync(pathFile) 
                // console.log(arrFiles)
                let arrFile = fs.readdirSync(pathFile).filter( file =>{
                    // if (isMarkdown(file)==="true"){
                        return isMarkdown(file)==="true"
                    // }
                })
                let arrFileMd=arrFile.map(file=>{
                    return `${pathFile}${file}`
                })
                // arrFiles.forEach(file=> {
                //     if (isMarkdown(file)==="true"){
                //         // let data= readFile(`${pathFile}/${file}`);
                //         // return getLinks(data, `${pathFile}/${file}`);  
                //         return file                  
                //     }
                // })
                // console.log(arrFileMd);
                return (arrFileMd) 
}

module.exports = isDir;



