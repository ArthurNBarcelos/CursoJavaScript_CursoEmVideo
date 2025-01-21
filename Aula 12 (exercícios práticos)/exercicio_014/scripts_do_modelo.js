function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()
    var periodo = window.document.getElementById("periodo")

    //var hora = 20 //Teste manual

    //Hora != Horas
    if (hora != 1) {
        msg.innerHTML = `Agora são ${hora} horas.`
    } else {
        msg.innerHTML = `Agora é ${hora} hora.`
    }

    //Imagens Manhã, Tarde e Noite
    if (hora >= 6 && hora < 12) {
        //Dia
        img.src = "fotomanha.png"
        window.document.body.style.background = "#feebd0"
        periodo.innerHTML = ("Bom dia!")
    } else if (hora >=12 && hora <= 18) {
        //Tarde
        img.src = "fototarde.png"
        window.document.body.style.background = "#dd9f64"
        periodo.innerHTML = ("Boa Tarde!")
    } else {
        //Noite
        img.src = "fotonoite.png"
        window.document.body.style.background = "#1d3136"
        periodo.innerHTML = ("Boa Noite!")
    }
}