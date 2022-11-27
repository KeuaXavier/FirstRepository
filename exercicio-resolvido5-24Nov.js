const produtos = [
    { nome: 'arroz', preco: 500 },
    { nome: 'carne', preco: 3200 },
    { nome: 'biscoito', preco: 450 },
    { nome: 'banana', preco: 320 }
];

function creatNewProductsArray(arrayProdutos) {
    const produtosDescoto = arrayProdutos.map((produto) => {
        return {
            nome: produto.nome,
            precoOriginal: produto.preco,
            desconto: produto.preco * 0.1,
            precoComDesconto: produto.preco - (produto.preco * 0.1)
        }
    })
    console.log(produtosDescoto);
}

creatNewProductsArray(produtos);