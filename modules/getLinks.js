//Funcion que halla los links del markdown 
const getLinks = (data, path) => {
    const regExp = /\[(.+)\]\((https?.+)\)/gm;
    let match; // Match es un arreglo con los elementos [text y url , text , url ,,index , input]
    let arrLink = [];
        while((match = regExp.exec(data)) !== null) {   
    //  console.log("indice de m: "+m.index) //primer caracter que coindice con Regex es decir ("[")
    //  console.log("indice de regex: "+regex.lastIndex)//ultimo caracter que coincide con Regex(")")
            let objLink = {
                file: path,    
                text: match[1], //Texto del linl
                href: match[2]  //URL 

            }
            arrLink.push(objLink);
        }
    return arrLink;
}

module.exports = getLinks;