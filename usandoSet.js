const meuArray = [30, 30, 40, 5, 44, 509, 2000, 4040, 5]
function valoresUnicos(arr) {
  const mySet = new Set(arr)

  return [...mySet] //'...'técnica spread para criar um novo array. Se nesse caso não utilizar estaremos apanas colocando um Set dentro de um array.
}

console.log(valoresUnicos(meuArray))
