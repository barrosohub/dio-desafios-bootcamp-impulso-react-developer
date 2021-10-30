/*
Enunciado:
https://prnt.sc/1xrzomv
*/

/*
Resolução:
*/

let line = gets().split(" ");
const a = parseInt(line[0]);
const b = parseInt(line[1]);

q = parseInt(a / b);

r = a - b * q;

if (r < 0) {
  r += Math.abs(b);
  
  q = parseInt((a - r) / b);
}

print(q + " " + r);