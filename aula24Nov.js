{   //seInterval()  =>  determina intervalo d temp q uma funcao ficara sendo executada
    //clearInterval()   =>  interrompe o setInterval()
    //setTimeOut()  =>  determina o tempo até uma funcao ser executada
    let numero = 10;
    const contador = setInterval(function () {
        // console.log(numero);
        numero--;
        if (numero === 0) {
            console.log('Boooooom!')
            clearInterval(contador);
        }
    }, 50);
}


{   //every()   =>  testa se todos elementos passam pela condição
    const frutas = ['maca', 'abacaxi', 'pera', 'gaioba'];
    //const resultado = frutas.every(function(item) {
    //    return item !== 'banana';
    //})
    const resultado = frutas.every((fruta) => {
        return fruta !== 'banana';
    })
    console.log(resultado);
}



{   //every()
    const usuarios = [
        { nome: 'Kell', idade: 21 },
        { nome: 'Lolo', idade: 20 },
        { nome: 'Isa', idade: 15 },
        { nome: 'Yume', idade: 18 }
    ];

    function fiscalizarFesta(array) {
        const resultado = array.every((usuario) => {
            return array.idade < 18;
        })
        if (resultado) {
            console.log('Festa Liberada');
        } else console.log('Possui menor de idade');
    }
    fiscalizarFesta(usuarios);
}


{   //some()    =>  teste se ao menos um elemento passa pela condição
    const nomes = ['kell', 'Isa', 'Lolo', 'yume', 'rafa'];

    const funcaoCallBack = (nome) => {
        return nome === 'kell';
    }
    const encontrar = nomes.some(funcaoCallBack);
    if (encontrar) {
        console.log('Kell está aqui');
    }
}