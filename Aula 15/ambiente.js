let num = [5, 2, 8, 1 ,6]
num[5] = 10 //Define como 10 o valor do elemento com índice 5
num.push(19) //Define um novo elemento, no fim da Arrey, com valor 19
console.log(`Na minha array eu posso os valores: ${num}`)
console.log(`Minha array possui ${num.length} elementos`)
console.log(`O primeiro valor da minha array é ${num[0]}`)
console.log(`Em ordem crescente, ficariam ordenados da seguinte forma: ${num.sort((a,b) => a-b)}`) //Ordena os elementos da array de forma crescente

