function adicionar (){
    var numeros = Number(document.getElementById('nmb').value)
        if(numeros > 100 || numeros < 1){
            window.alert('Número inválido.')
        }else{
            var result = document.getElementById('result')
            var save = ['']
            var tabela = document.getElementById('table')
            var restabela = document.createElement('option')
            restabela.innerHTML = `Número ${numeros} adicionado!`
            tabela.appendChild(restabela)
            var save = numeros
            //result.innerHTML += `numero ${save}`
        }
    }
    function finalizar(){
        result.innerHTML += `exitem ${save.length} números adicionados`
        
}