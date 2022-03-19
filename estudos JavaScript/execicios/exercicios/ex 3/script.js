function contar(){
    var inicio = document.getElementById('num1')
    var fim = document.getElementById('num2')
    var passo = document.getElementById('num3')
    var num1 = Number(inicio.value)
    var num2  = Number(fim.value)
    var num3 = Number(passo.value)
    var res = document.getElementById('resultado')
    
    for(var cont = num1;cont <= num2;cont+=num3){
        res.innerText = `Contando ${cont}`
    }
}