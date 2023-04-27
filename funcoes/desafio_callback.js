const exec = (fn, a , b) => {
    return eval(fn)(a,b)
}
const somar = (a, b) => a + b
const subtrair = (a,b) => a - b

const func = process.argv[2]
const numA = parseInt(process.argv[3])
const numB = parseInt(process.argv[4])

const resultado = exec(func, numA, numB)

console.log('resultado ', resultado)
