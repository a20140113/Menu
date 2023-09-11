alert("Bienvenido al restaurante. Esta es tu cuenta")

var Costo1= parseInt(prompt("Costo de Entrada"));
var Costo2= parseInt(prompt("Costo del plato Pricipal"));
var Costo3= parseInt(prompt("Costo del Postre"));

var Costo_Total= Costo1+Costo2+Costo3;
var Costo_con_IGV= (Costo_Total*0.18)+Costo_Total ;

console.log("La entrada costo: "+ Costo1)
console.log("El plato principal costo: "+ Costo2)
console.log("El postre costo: "+ Costo3)
console.log("El costo total fue: "+ Costo_Total)
console.log("El costo con IGV fue: "+ Costo_con_IGV)
