var numeros = [1, 2, 8, 7, 5, 6, 3, 9]

for(var pos = 0;pos < numeros.length;pos++){
    console.log(`A posição ${pos} tem o valor ${numeros[pos]}`)
} // Opção classica

for(var pos in numeros){
    console.log(`O elemento ${pos} tem o valor ${numeros[pos]}`)
} //Opção simplificada para vetores, for(   in   )

var puxar = 8
var loc = numeros.indexOf(puxar) // buscar um valor dentro do vetor
 
    if(loc == -1){
        console.log('O valor não foi encontrado')
    }else{
        console.log(`O valor esta na posição ${loc}`)
    }