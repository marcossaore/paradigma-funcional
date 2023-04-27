const bomDia = () => {
    console.log('Bom dia!')
}

function boaTarde () {
    console.log('boa tarde!')
}

function executar (fn) {
    if(typeof fn === 'function') {
        fn()
    }
}

executar(5)
executar(bomDia)
executar(boaTarde)


function potencia (base, exp) {
    return Math.pow(base, exp)
}

let bits8 = potencia(2, 8)
console.log(bits8)

function potencia2 (base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

bits8 = potencia2(2)(8)
console.log(bits8)

