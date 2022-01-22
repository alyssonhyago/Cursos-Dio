let lines = gets().split("\n");

let n = parseInt(lines.shift());
//escreva o seu código aqui
if (n>=1 && n<=34) {

const texto="Life is not a problem to be solved, but a reality to be experienced.";

const parcial = texto.substr(0, n)

const maiuscula = parcial.toUpperCase();

console.log(maiuscula);
}
