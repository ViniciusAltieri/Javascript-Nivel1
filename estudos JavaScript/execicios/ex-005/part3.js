var agora = new Date()
var dia = agora.getDay()
var horas = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()


switch (dia){
    case 0:
        console.log('Domingo!')
        break
    case 1:
        console.log('Segunda!')
        break
    case 2:
        console.log('Terça!')
        break
    case 3:
        console.log('Quarta!')
        break
    case 4: 
        console.log('Quinta!')
        break
    case 5:
        console.log('Sexta!')
        break
    case 6: 
        console.log('Sabado!')   
        break         

}

console.log(`e são ${horas}:${minutos}:${segundos}`)
