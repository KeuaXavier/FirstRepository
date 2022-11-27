{   //some()
    const arquivos = ['image.png', 'image.jpg', 'index.js', 'virus.bat']

    function detectarVirus(array) {
        const resultadoVarredura = array.some((arquivo) => {
            const verificarExtencao = arquivo.indexOf('.bat'); //se nao encontrar .bat, indice = -1
            return verificarExtencao !== -1; //retorna true se o indice for diferente de -1
        });
        if (resultadoVarredura) {
            console.log('Virus Detectado');
        } else {
            console.log('Nenhum vírus detectado')
        }
    }
    detectarVirus(arquivos);
}

{   //find() e findIdenx()
    const carros = [
        { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
        { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto' },
        { nome: 'ranger', marca: 'ford', ano: '2021', cor: 'prata' },
        { nome: 'mustang', marca: 'ford', ano: '1967', cor: 'vermelho' }
    ];
    //funcao normal
    function buscarCarro(marca, arrayCarros) {
        return arrayCarros.find((carro) => {
            return carro.marca === marca;
        });
    }
    const resultadoBusca = buscarCarro('ford', carros);
    console.log(resultadoBusca);

    //funcao com arrow
    const buscarCarroCor = (cor, arrayCar) => {
        return arrayCar.find((carro) => {
            return carro.cor === cor;
        });
    }
    const resultadoBusca2 = buscarCarroCor('prata', carros);
    console.log(resultadoBusca2);

    //funcao findIndex implementada em funcao arrow
    const buscarIndexCarro = carros.findIndex((carro) => {
        return carro.nome === 'mustang';
    })
    console.log(buscarIndexCarro);
}


{   //filter()
    const numeros = [1, 2, 3, 2, 4, 4, 5, 1, 2, 5, 2, 1, 2, 6, 7, 4, 2, 1];

    //function arrow
    const numeros2 = numeros.filter((numero) => {
        return numero === 2;
    })
    console.log(numeros2);

    //function padrão
    function encontrarNumeros(numero, arrayNumeros) {
        const numerosEncontrados = arrayNumeros.filter((item) => {
            return item === numero
        })
        console.log(numerosEncontrados);
    }
    encontrarNumeros(1, numeros);
    encontrarNumeros(4, numeros);
}
{
    const professores = [
        { nome: 'Guido', stack: 'backend' },
        { nome: 'Vidal', stack: 'backend' },
        { nome: 'Dani', stack: 'frontend' },
        { nome: 'Diego', stack: 'frontend' },
        { nome: 'Leo', stack: 'backend' },
        { nome: 'Ruli', stack: 'frontend' }
    ];

    function separarStackDeProfessores(stack, array) {
        const filtrarProfessor = array.filter((professor) => {
            return professor.stack === stack;
        })
        console.log(filtrarProfessor);
    }
    separarStackDeProfessores('backend', professores);
    separarStackDeProfessores('frontend', professores);
}


{
    //map() executa uma callback function para cada elemento da array
    //retorna uma array
    const pessoas = [
        { nome: 'Guido', sobrenome: 'Valadares', idade: 26 },
        { nome: 'Vidal', sobrenome: 'Lopes', idade: 27 },
        { nome: 'Dani', sobrenome: 'Vasconcelos', idade: 25 },
        { nome: 'Diego', sobrenome: 'Defante', idade: 29 },
        { nome: 'Leo', sobrenome: 'Pires', idade: 24 },
        { nome: 'Ruli', sobrenome: 'Lopes', idade: 29 }
    ];

    const newArray = pessoas.map((pessoa) => {
        return { nomeCompleto: `${pessoa.nome} ${pessoa.sobrenome}`, idade: pessoa.idade };
    })

    console.log(newArray);
}