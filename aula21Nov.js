const pessoa1 = {
    nome: 'Kell Xavier',
    idade: 21,
    profissao: 'programador',
    altura: 1.75
};

function saberFaixaEtaria(idade) {
    if (idade < 12) {
        return 'criança';
    } else if (idade < 18) {
        return 'adolecente';
    } else if (idade < 25) {
        return 'jovem';
    } else if (idade < 65) {
        return 'adulto';
    } else return 'idoso'
};

function apresentação(pessoa) {
    const faixaEtaria = saberFaixaEtaria(pessoa.idade);
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
};


apresentação(pessoa1);