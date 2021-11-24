/**
 * Arquivo para testar os módulos
 */

//importando os módulos
//Não precisa colocar a extensão e sempre iniciar com ./
//para fazer a decomposição, é necessário usar os mesmo nomes
const {sayHi, devJR, secret} = require("./modulos");

console.log(devJR);
console.log(secret);
console.log(sayHi("Jhon"));