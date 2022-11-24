{
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


{
    const frutas = ['maca', 'abacaxi', 'pera', 'gaioba'];
    //const resultado = frutas.every(function(item) {
    //    return item !== 'banana';
    //})
    const resultado = frutas.every((fruta) => {
        return fruta !== 'banana';
    })
    console.log(resultado);
}



{
    const usuarios = [
        { nome: 'Kell', idade: 21 },
        { nome: 'Lolo', idade: 20 },
        { nome: 'Isa', idade: 15 },
        { nome: 'Yume', idade: 18 }
    ];

    function fiscalizarFesta(array) {
        const resultado = usuarios.every((usuario) => {
            return usuario.idade < 18;
        })
        if (resultado) {
            console.log('Festa Liberada');
        } else console.log('Possui menor de idade');
    }
    fiscalizarFesta(usuarios);
}



const nomes = ['kell', 'Isa', 'Lolo', 'yume', 'rafa'];

const funcaoCallBack = (nome) => {
    return nome === 'kell';
}
const encontrar = nomes.some(funcaoCallBack);
if (encontrar) {
    console.log('Kell está aqui');
}