function carregar() {

var msg = window.document.getElementById("msg")
var img = window.document.getElementById("img")
var msg2 = window.document.getElementById("msg2")

var data =  new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`


if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = "./imagens/manha.jpg"
        document.body.style.background = 'yellow'
        msg2.innerHTML = `Bom dia!`
        } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = './imagens/tarde.jpg'
        document.body.style.background = 'blue'
        msg2.innerHTML = `Boa tarde!`
        } else {
        // boa noite
        img.src = './imagens/noite.jpg'
        document.body.style.background = 'grey'
        msg2.innerHTML = `Boa noite!`
    }

}

