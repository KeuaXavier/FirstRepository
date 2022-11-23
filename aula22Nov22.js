//saber se uma determinada palavra está presente em uma string
{
    const frase = 'Eu sou um programador em formação pela Cubos Academy';
    console.log(frase.includes('Cubos Academy', 10)); //true
}


//saber se um email é valido verificando se tem @ e um . depois do @
{
    const email = 'Kekell@hotmail.com';

    if (email.includes('@') && email.includes('.', email.indexOf('@'))) {
        console.log('Este email é valido.');
    } else {
        console.log('Este email NÃO é valido.');
    };
}

//retornar os digitos do estado da cidade
{
    const cidade = 'João Pinheiro - MG';
    let estado = cidade.slice(-2);
    console.log(estado);
}

//trocar . por ,
{
    const valor = 156.37;
    let separarDecimaisComVirgula = String(valor).replace('.', ',');
    console.log(separarDecimaisComVirgula);
}

//trocar padrão de separação de milhares e decimais
//de ',' para milhares e '.' para decimais
//para '.' para milhares e ',' para decimais
{
    let numero = '1,350,000';
    for (let caractere of numero) {
        if (caractere === ',') {
            numero = numero.replace(',', '.');
        }
    } console.log(numero);
    //voltanto ao original para testar outro metodo
    while (numero !== numero.replace('.', ',')) {
        numero = numero.replace('.', ',');
    } console.log(numero);
}


//remover espaços vazios no inicio e fim
{
    const email = '     kekell@hotmail.com    ';
    let emailStringFormatado = email.trim();
    console.log(emailStringFormatado);
    console.log(email);
}


//imprimir data no formato 00/00/0000
{
    function imprimirData(dia, mes, ano) {
        let diaFormatado = String(dia).padStart(2, '0');
        let mesFormado = String(mes).padStart(2, '0');
        console.log(`${diaFormatado}/${mesFormado}/${ano}`);
    }
    imprimirData(1, 1, 2021)
}


//tansformar todas iniciais em maiusculas
{
    const nome = 'kell xavier da silva soares';

    let arrayNome = nome.split(' ');
    let nomeFormatado = '';
    for (let item of arrayNome) {
        let primeiraLetra = item[0].toUpperCase();
        let restanNome = item.slice(1);
        nomeFormatado += primeiraLetra + restanNome + ' ';
    }
    console.log(nomeFormatado.trim());
}