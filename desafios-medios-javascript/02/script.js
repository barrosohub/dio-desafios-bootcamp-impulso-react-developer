/*
Enunciado:
https://prnt.sc/1xrzi1q
*/

/*
Resolução:
*/

let lines = gets().split("\n");
let line = lines.shift().split(' ');

//continue o seu código aqui
let N = parseFloat(line[0]);
let L = parseFloat(line[1]);
let P = N * L;
console.log(P);