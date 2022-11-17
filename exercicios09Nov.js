//desconto de 10% a vista
//a loja parcelas em até 6x sem juros, mas sem desconto

const valorCompra = 100;
const parcelas = 7;
const taxa = 0.01;

if (parcelas === 1) {
    const valorPagar = valorCompra - (valorCompra * 0.1);
    console.log(`Valor a pagar: R$${valorPagar.toFixed(2)}.`);
} else if (parcelas > 1 && parcelas < 7) {
    const valorParcela = valorCompra / parcelas;
    console.log(`Valor a pagar: ${parcelas} vezes de R$${valorParcela.toFixed(2)}.`);
} else if (parcelas >= 7 && parcelas <= 12) {
    const valorFinal = (valorCompra * ((1 + taxa) ** parcelas));
    const valorParcela = valorFinal / parcelas;
    console.log(`Valor a pagar: ${parcelas} vezes de R$${valorParcela.toFixed(2)}, totalizando R$${valorFinal.toFixed(2)} devido a incidencia de juros.`);
} else console.log(`Não é possível parcelar em ${parcelas} vezes. O limite de parcelas é em 12 vezes.`);
