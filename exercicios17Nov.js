const pessoa = {
    nome: 'Kell',
    idade: 21,
    altura: 1.75,
    cnh: false,
    apelidos: ['keuã', 'Johnny', 'Keke', 'Kiwi', 'Q-u-ãh?', 'Quãn', 'BTS']
}
const textoCNH = pessoa.cnh ? "possui CNH" : "não possui CNH";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} e possui os seguintes apelidos:`);
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}