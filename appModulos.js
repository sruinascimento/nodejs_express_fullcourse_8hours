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

const {nome, age} = require("./alternativaExportacao");
console.log(nome);
console.log(age);
console.log(module);

//importando um script inteiro
require("./scritptInteiro");