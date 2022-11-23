{
    function inverterTexto(texto) {
        let arrayLetras = texto.split('');
        arrayLetras.reverse();
        let textoInvertido = arrayLetras.join('');
        console.log(textoInvertido);
    }
    inverterTexto('Kell Xavier da Silva Soares');
}

{
    function filtrar80(dados) {
        const startIndex = Math.round(dados.length * 0.1);
        const stopIndex = Math.round(dados.length * 0.9);
        let dadosFiltrados = dados.slice(startIndex, stopIndex);
        console.log(`Quantidade de dados para analize: ${dados.length}`);
        console.log(`Começo da analise: ${startIndex}`);
        console.log(`Fim da analise: ${stopIndex}`);
        console.log(dadosFiltrados);
    }
    const dados = [0, 1, 5, 7, 10, 33, 55, 60, 57, 85, 45, 68, 49, 57, 59, 69, 57, 33, 24, 11, 5, 3, 1, 0, 0];
    filtrar80(dados);
}



let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
array.splice(1, 2, 'B', 'C');
console.log(array);