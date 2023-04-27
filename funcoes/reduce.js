
Array.prototype.myReduce = function (fn, initialValue = 0) {
    let accumulator = initialValue
    for (let index = 0; index < this.length; index++) {

        if (!accumulator) {
            accumulator = this[index]
            continue
        }

        accumulator = fn(accumulator, this[index], index, this)
    }
    return accumulator
}

const notas = [
    2,
    3,
    5,
    3,
    4,
    3
]

const somaNotasMaiorQ4 = (accumulator, element) => accumulator + element
const notasMaiorQ4 = notas.myReduce(somaNotasMaiorQ4, 10)


console.log('somaNotasMaiorQ4 ', notasMaiorQ4)

const carrosVendidos = [
    {
        name: 'corolla',
        price: 90000,
        quantity: 4
    },
    {
        name: 'honda',
        price: 100000,
        quantity: 2
    },
    {
        name: 'celta',
        price: 18000,
        quantity: 6
    }
]

const totalPorCarroVendido = carrosVendidos.map(({ price, quantity }) => price * quantity)
// console.log('totalPorCarroVendido ', totalPorCarroVendido)

const totalGeral = totalPorCarroVendido.reduce((accumulator, element) => accumulator + element)
console.log('totalGeral ', totalGeral)

const totalGeral2 = totalPorCarroVendido.reduce((accumulator, element) => accumulator + element)
console.log('totalGeral MyReduce ', totalGeral2)


const mediaGeral = totalPorCarroVendido.reduce((accumulator, element) => {
    const novaQtde = accumulator.qtde + 1
    const novoTotal = accumulator.total + element
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}, 
{
  qtde: 0,
  total: 0,
  media: 0  
}
)

const mediaGeral2 = totalPorCarroVendido.reduce((accumulator, element) => {
    const novaQtde = accumulator.qtde + 1
    const novoTotal = accumulator.total + element
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}, 
{
  qtde: 0,
  total: 0,
  media: 0  
}
)

console.log('mediaGeral ', mediaGeral)
console.log('mediaGeral MyReduce ', mediaGeral2)