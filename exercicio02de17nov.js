const produtosConsumidos = [
    {
        nome: 'Frango Assado',
        precoUn: 449,
        quantidade: 2
    },
    {
        nome: 'Prato Arroz e Feijão',
        precoUn: 700,
        quantidade: 1
    },
    {
        nome: 'Batata Frita: Média',
        precoUn: 500,
        quantidade: 1
    },
    {
        nome: 'Salada',
        precoUn: 500,
        quantidade: 1
    },
    {
        nome: 'Suco Maracuja: Grande',
        precoUn: 800,
        quantidade: 1
    }
];


const cartaoConsumo = {
    cliente: 'Kell Xavier',
    genero: 'NB',
    idade: 21,
    produtosConsumidos
};
// console.log(cartaoConsumo.cliente);
// console.log(cartaoConsumo.idade);
// cartaoConsumo.idade = 16;
// console.log(cartaoConsumo.idade);
// console.log(cartaoConsumo.produtosConsumidos[0].nome);
// console.log(cartaoConsumo.produtosConsumidos[produtosConsumidos.length - 1].precoUn);
// console.log(cartaoConsumo)

let textoGenero = '';
if (cartaoConsumo.genero == 'M') {
    textoGenero = 'Estimado Sr.';
} else if (cartaoConsumo.genero == 'F' ? textoGenero = 'Estimada Sra.' : textoGenero == '');

let soma = 0;
for (let i = 0; i < produtosConsumidos.length; i++) {
    soma += produtosConsumidos[i].precoUn * produtosConsumidos[i].quantidade;
}
console.log(`${textoGenero} ${cartaoConsumo.cliente}, agradecemos pela sua presença em nosso estabelecimento.
O valor a se pagar é de R$${(soma / 100).toFixed(2)}.`);