Array.prototype.myFilter = function (fn) {
    const filtered = []
    for (let index = 0; index < this.length; index++) {
        const valueInCondition = fn(this[index], index, this)
        if (valueInCondition) {
            filtered.push(this[index])
        }
    }
    return filtered
}

const notas = [
    5,
    7,
    8,
    4,
    5,
    7,
    9,
    10
]

const filtrarNotasMaioresOuIqualA5 = nota => nota >= 5
const notasMaioresOuIqualA5 = notas.myFilter(filtrarNotasMaioresOuIqualA5)

const filtrarNotaIqualA5 = nota => nota === 5
const notasIqualA5 = notas.myFilter(filtrarNotaIqualA5)


console.log('notasMaioresOuIqualA5 ', notasMaioresOuIqualA5)
console.log('notasIqualA5 ', notasIqualA5)


const carros = [
    {
        nome: 'siena',
        sedan: true
    },
    {
        nome: 'palio',
        sedan: false
    },
    {
        nome: 'celta',
        sedan: false
    },
    {
        nome: 'corolla',
        sedan: true
    }
]

const somenteCarrosSedan = carros.myFilter(carro => carro.sedan === true)
console.log('somenteCarrosSedan ', somenteCarrosSedan)