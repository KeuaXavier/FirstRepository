let ladoA = 3;

function comSwitch() {
    switch (ladoA) {
        case 0:
            console.log('É 0');
            break;
        case 1:
            console.log('É 1');
            break;
        case 2:
            console.log('É 2');
            break;
        case 3:
            console.log('É 3');
            break;
        default:
            console.log(
                'Caso não seja nenhum do itens acima, o switch cai aqui (é como se fosse um else)',
            );
            break;
    }
}

function comIf() {
    if (ladoA == 0) {
        console.log('É 0');
    }
    console.log('Codigo entre o proximo teste');
    if (ladoA == 1) {
        console.log('É 1');
    }
    if (ladoA == 2) {
        console.log('É 2');
    }
    console.log('Mais codigo entre o proximo teste');
    if (ladoA == 3) {
        console.log('É 3');
    }
}

function comIfAninhado() {
    if (ladoA == 0) {
        console.log('É 0');
    } else if (ladoA == 1) {
        console.log('É 1');
    } else if (ladoA == 2) {
        console.log('É 2');
    } else if (ladoA == 3) {
        console.log('É 3');
    }
}

function comTernario() {
    ladoA == 0 ? console.log('É 0') : console.log('NÃO É 0');
    ladoA == 1 ? console.log('É 1') : console.log('NÃO É 1');
    ladoA == 2 ? console.log('É 2') : console.log('NÃO É 2');
    ladoA == '3' ? console.log('É 3') : console.log('NÃO É 3');
    ladoA === '3' ? console.log('É 3 ===') : console.log('NÃO É 3');
}

//comSwitch();
//comIf();
//comIfAninhado();
comTernario();
