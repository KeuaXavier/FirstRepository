const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

let maior = notas[0];
let menor = notas[0];

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > maior) {
        maior = notas[i];
    }
    if (notas[i] < menor) {
        menor = notas[i];
    }
}
let notasASomar = notas;
notasASomar.splice(notasASomar.indexOf(maior), 1);
notasASomar.splice(notasASomar.indexOf(menor), 1);

let soma = 0;
for (let nota of notas) {
    soma += nota;
}
soma = soma / notasASomar.length;
console.log(soma);