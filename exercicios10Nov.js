const palavra = "abacaxi";

let quantidadeLetrasA = 0;

for (let letra of palavra) {
    if (letra === "a") {
        quantidadeLetrasA++;
    }
} console.log(quantidadeLetrasA);

for (let numero = 10; numero >= 0; numero--) {
    console.log(numero);
}

let numero = 0;

while (numero <= 50) {
    console.log(numero);
    numero += 2;
}

for (let numero = 0; numero <= 50; numero += 2) {
    console.log(numero);
}