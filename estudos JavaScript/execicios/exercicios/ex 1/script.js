function carregar(){

var nome = prompt('Olá, qual seu nome?')
var agora = new Date()
var h = agora.getHours()
var m = agora.getMinutes()
var res = document.getElementById('msg')
var img = document.getElementById('imagens')
res.innerHTML = `Olá ${nome}, agora são <strong><code>${h}:${m}</code></strong>`
if (h >= 6 && h < 12){
    img.src='imagem manhã.jpg'
    document.body.style.background = '#d3ded6'
}else if(h <= 16){
    img.src='imagem meio dia.jpg'
    document.body.style.background = '#86afe7'
}else if(h < 19){
    img.src='imagem fim de tarde.jpg'
    document.body.style.background = '#b65b12'
}else{
    img.src='imagem noite.jpg'    
    document.body.style.background = '#0e1e52'
}

}