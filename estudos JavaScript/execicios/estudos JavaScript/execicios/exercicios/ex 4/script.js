function calcular(){
    var number = Number(document.getElementById('nmb').value)
    var restab = document.getElementById('restab')
    if(number.length == 0){
        alert('Por favor, insira um número')
    }else{
        restab.innerHTML = ''
        for(var c = 1;c <=10;c+=1){
            var res = document.createElement('option') //criar elemento option, para armazenar informações dentro do select
            res.innerText = `${number} x ${c} = ${number*c}`
            restab.appendChild(res) //exibir resultado no elemento <select>
            
        }   
    }
}