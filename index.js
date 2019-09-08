//Manejo de la promesa mdLinks
const mdLinks= require("./modules/mdLinks.js");

mdLinks(process.argv[2], process.argv[3], process.argv[4])
.then(res =>{
  console.log(res);
})
.catch(res => {
  console.log(res);
});

// //Para hacer uso de un modulo debemos exportarlo
// //Exportando la funcion
// //module.exports= Nombre_funcion_a_exportar;
// //Para poder hacer uso del modulo
// //Descargar el modulo desde npm en el proyecto ejemplo, nombre del modulo "modulos"
// //Declararlo en el proyecto en que queremos utilizarlo 
// //const nombredelafuncionennuestroproyecto= require("modulos");
// //Instalar en el package de nuestro proyecto las dependencias
// //"dependencies": {
// //  "modulos": "^1.0.0"
// //}


// // mdLinks("./README.md");
// //CLI para poder usar la informacion en 
// //spread operator
// //args .env
// //