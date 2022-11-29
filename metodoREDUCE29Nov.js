//{//reduce();
//	>>	executa uma função callback passada como argumento para cada elemento do array
//		        essa função resulta em apenas um valor de retorno

//	>>	a função passada como argumento para método reduce recebe 4 argumentos:
//			1. acumulador:	valor inicial (ou valor do callback anterior)
//			2. valorAtual:	o valor do elemento atual
//			3. index:		o indice atual
//			4. array:		o array
//}
{
    const numeros = [0, 1, 2, 3, 4, 5];

    {//somar array com for
        let soma = numeros[0]
        for (let i = 0; i < numeros.length; i++) {
            soma += numeros[i];
        }
        console.log(soma);
    }
    {//soma feita com reduce();
        const valorArray = numeros.reduce((acumulador, valorAtual, index, array) => {
            return acumulador + valorAtual;
        })
        console.log(valorArray);
    }
    {//pode-se determinar qual vai ser o valor inicial do acumulador colocando esse valor como argumento
        const valorArray = numeros.reduce((acumulador, valorAtual, index, array) => {
            return acumulador + valorAtual;
        }, 100)
        console.log(valorArray);
    }
}
{//reducao de uma array de arrays em apenas array
    const arrayDeArrays = [[0, 1], [2, 3, 4], [14, 22, 98]];

    const arrayReduzido = arrayDeArrays.reduce((acumulador, elementoAtual, indice, array) => {
        return [...acumulador, ...elementoAtual];
    }, [])
    console.log(arrayReduzido);
}
{//exercicio resolvido 3:
    const usuários = [
        { id: 11, nome: 'Kelly', idade: 16 },
        { id: 2, nome: 'Keuã', idade: 21 },
        { id: 4, nome: 'Johnny', idade: 25 },
        { id: 1, nome: 'Kell', idade: 16 },
        { id: 123, nome: 'Isa', idade: 15 },
        { id: 65, nome: 'Lolo', idade: 17 },
        { id: 7, nome: 'Emy', idade: 14 }
    ];

    const encontrarMaiorIdade = usuários.reduce((acumulador, elementoAtual, indice, array) => {
        let maior = acumulador;

        if (elementoAtual.idade > maior.idade) {
            maior = elementoAtual;
        }
        return maior;
    })
    console.log(encontrarMaiorIdade);
}