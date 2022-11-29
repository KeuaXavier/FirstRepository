{//sort() >> ordena os elementos do array
    const numeros = [0, 5, 6, 1, 2, 9, 45, 8, 66, 10];
    numeros.sort((elemento1, elemento2) => {
        if (elemento1 < elemento2) {
            return -1;
        }
        if (elemento1 > elemento2) {
            return 1;
        }
        return 0;
    });
    console.log(numeros);
    // 1 — Se o retorno da função for number < 0(negativo):
    //     o primeiro parâmetro vem antes do segundo
    // 2 — Se o retorno da função for number > 0(positivo):
    //     o segundo parâmetro vem antes do primeiro
    // 3— Se o retorno da função for number = 0:
    //     mantem a posição
    //para inverter a ordem de crescente para decrescentre basta inverter os retornos

    // resumido
    numeros.sort((elemento1, elemento2) => {
        return elemento1 - elemento2;
    })
    console.log(numeros);
}
{   //sort em objetos
    const usuários = [
        { id: 11, nome: 'Kelly', idade: 16 },
        { id: 2, nome: 'Keuã', idade: 21 },
        { id: 4, nome: 'Johnny', idade: 25 },
        { id: 1, nome: 'Kell', idade: 16 },
        { id: 123, nome: 'Isa', idade: 15 },
        { id: 65, nome: 'Lolo', idade: 17 },
        { id: 7, nome: 'Emy', idade: 14 }
    ];
    // crescente
    usuários.sort((id1, id2) => {
        return id1.id - id2.id;
    })
    console.log(usuários);
    // decrescente
    usuários.sort((id1, id2) => {
        return id2.id - id1.id;
    })
    console.log(usuários);
}
{   //sort em array de strings
    const nomes = ['Zallan', 'keuã', 'Johnny', 'Kell', 'Isa', 'Lolo', 'emy', 'ana', 'Thálita'];
    console.log(nomes);
    nomes.sort();
    console.log(nomes); //pela tabela UNICODE maiusculas vem antes de minuculas, portanto não irá imprimir na ordem esperada
    //assentos contam como ultima prioridade tbm
    //nesse caso utliliza-se o locateCompare()

    {//localeCompare() >> retorna um number q indica se a string de referência vem antes, depois ou é igual a string comparada;
        // comparação crescente
        const callBack = (item1, item2) => {
            return item1.localeCompare(item2);
        }
        nomes.sort(callBack);
        console.log(nomes);
        //comparação decrescente
        nomes.sort((item1, item2) => {
            return item2.localeCompare(item1);
        });
        console.log(nomes);
    }
}
{
    const carros = [
        { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
        { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto' },
        { nome: 'ranger', marca: 'ford', ano: '2021', cor: 'prata' },
        { nome: 'mustang', marca: 'ford', ano: '1967', cor: 'vermelho' },
        { nome: 'hilux  ', marca: 'toyota', ano: '2018', cor: 'branco' }
    ];
    function ordenarCarros(tipoOrdenacao, arrayCarros) {
        arrayCarros.sort((carro1, carro2) => {
            return carro1[tipoOrdenacao].localeCompare(carro2[tipoOrdenacao]);
        })
        console.log(arrayCarros);
    }
    ordenarCarros('nome', carros);
    ordenarCarros('marca', carros);
    ordenarCarros('ano', carros);
}