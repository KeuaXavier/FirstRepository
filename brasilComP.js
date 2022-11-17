const palavras = [];
const primeiraLetra = "a";
const segundaLetra = "v";


let palavrasPassaram = [];
for (let i = 0; i < palavras.length; i++) {
    if (palavras[i][0] === primeiraLetra && palavras[i][1] === segundaLetra) {
        palavrasPassaram.push(palavras[i]);
        console.log(palavras[i]);
    }
}
if (palavrasPassaram.length == 0) {
    console.log("NENHUMA");
}