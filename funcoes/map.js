Array.prototype.myMap = function (fn) {
    const newArray = []
    for (const item of this) {
        newArray.push(fn(item))
    }
    return newArray
}

const myArray = [
    1,
    2,
    50,
    100,
    3
]

const carrinho = [
    {
        quantidade: 2,
        preco: 15
    },
    {
        quantidade: 5,
        preco: 100
    },
    {
        quantidade: 1,
        preco: 1050
    }
]

const totalPorProduto = el => el.quantidade * el.preco

// map criado
console.log(carrinho.myMap(totalPorProduto))

// map do javascript
console.log(carrinho.map(totalPorProduto))

console.log(myArray.myMap(el => el * 2))
