const imcs = [15, 25, 60, 55, 56, 18, 14, 40, 41]

let classA = [];
for (let item of imcs) {
    if (item < 25) {
        classA.push(item);
    }
} const somaA = classA.length * 0.16

let classB = [];
for (let item of imcs) {
    if (item >= 25 && item <= 29) {
        classB.push(item);
    }
} const somaB = classB.length * 0.31

let classC = [];
for (let item of imcs) {
    if (item > 29) {
        classC.push(item);
    }
} const somaC = classC.length * 0.59

const quantidade = somaA + somaB + somaC
console.log(quantidade);