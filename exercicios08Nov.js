const minhaCidadeNatal = "Brasilia - DF";
console.log(minhaCidadeNatal);



{
    let populaçaoJoaoPinheiro = 500;
    console.log(populaçaoJoaoPinheiro);
    {
        let populaçaoJoaoPinheiro = 123321;
        console.log(populaçaoJoaoPinheiro);
    }
}

populaçaoJoaoPinheiro = 47452;
console.log(populaçaoJoaoPinheiro);

let nome = "kell";      //string
let idade = 21;         //number
let altura = 1.74;      //nunber
let nada;               //undefined

let eu = nome + ", " + idade + " anos, " + altura + " de altura";
console.log(eu);

let x = 10, y = 2;
let resultado = x + y;
let mensagem = "A soma de " + x + " e " + y + " é igual a " + resultado;
console.log(mensagem);

resultado = x - y;
mensagem = "A subtração de " + x + " e " + y + " é igual a " + resultado;
console.log(mensagem);

resultado = x * y;
mensagem = "A multiplicação de " + x + " e " + y + " é igual a " + resultado;
console.log(mensagem);

resultado = x / y;
mensagem = "A divisão de " + x + " por " + y + " é igual a " + resultado;
console.log(mensagem);

resultado = x + x - y;
console.log(`O resultado de ${x} + ${x} - ${y} é igual a ${resultado}`);