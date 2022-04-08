function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var txt = document.getElementById('idade')
    var datanas = Number(txt.value)
    var idade = ano - datanas
    var res = document.getElementById('mensagem')
    var img = document.getElementById('img')

    if (datanas <= 1900 || datanas > 2022){
        alert('Data inválida, verifique as informações e tente novamente!')
    }else {
        var fsex = document.getElementsByName('rad')
        var genero = ''

    }if (fsex[0].checked){
        genero = 'Homem'
    }else {
        genero = 'Mulher'

    }if (genero == 'Homem' && idade < 10) {
        img.src='BebêM.jpg'
    }else if (genero == 'Homem' && idade < 21) {
        img.src='JovemM.jpg'
    }else if (genero == 'Homem' && idade < 50){
        img.src='AdultoM.jpg'
    }else if (genero == 'Homem' && idade < 122){
        img.src='idosoM.jpg'
    }

    if (genero == 'Mulher' && idade < 10) {
        img.src='BebêF.jpg'
    }else if (genero == 'Mulher' && idade < 21) {
        img.src='JovemF.jpg'
    }else if (genero == 'Mulher' && idade < 50){
        img.src='AdultoF.jpg'
    }else if (genero == 'Mulher' && idade < 122){
        img.src='idosaF.jpg'
    }

    res.innerHTML = `${genero} com ${idade} anos`
    res.style.textAlign = 'center'
    res.style.padding = '13px'



}