const somar = (a, b) => a + b

const subtrair = (a, b) => a - b

const multiplicar = (a, b) => a * b

const divir = (a, b) => a / b

const potencia = (base) => {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const calcular = a => b => fn => fn(a,b)

const somar5Mais10 = calcular(5)(10)(somar)
console.log('somar5Mais10 ', somar5Mais10)

const subtrair190Menos87 = calcular(190)(87)(subtrair)
console.log('subtrair190Menos87 ', subtrair190Menos87)

const multiplicar4Vezes50 = calcular(4)(50)(multiplicar)
console.log('multiplicar4Vezes50 ', multiplicar4Vezes50)

const dividir230por4 = calcular(230)(4)(divir)
console.log('dividir230por4 ', dividir230por4)

const potencia2a4 = potencia(2)(4)
console.log('potencia2a4 ', potencia2a4)
