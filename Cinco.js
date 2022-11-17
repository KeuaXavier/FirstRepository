const precos = [100, 100, 100, 50];

let soma = 0;
for (let valor of precos) {
    soma += valor;
}

if (precos.length >= 5) {
    let menor = precos[0];
    for (let valor of precos) {
        if (valor < menor) {
            menor = valor;
        }
    }
    soma = soma - menor;
    console.log(soma);
} else console.log(soma);

precos.ind