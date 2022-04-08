var num = [3 ,2 ,1]
    num[3] = 10 // Adicionar um novo valor em determinado elemento
    num.push(25) // Adiconar um valor na ultima posição
    num.length // Quantos elementos tem o vetor

console.log(`Nosso vetor tem ${num.length} elementos`)
console.log(`O elemento de posição 0 é o ${num[0]}`)

num.sort(function(a, b){return a-b}) // Organiza os números em ordem crescente

console.log(`Nosso vetor em ordem crescente é ${num}`)

var string = ['vinicius',' andre',' leo.']
console.log(`Nosso vetor possui ${string.length} elementos, e os respectivos elementos são: "${string}"`)



