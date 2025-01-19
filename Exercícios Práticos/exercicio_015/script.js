function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fAno = window.document.getElementById("txtano")
    var res = window.document.querySelector("div#res")
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert("Erro: verifique os dados e tente novamente!")
    } else {
        var fsex = window.document.getElementsByName("radsex")//[0]Masculino [1]Feminino
        var idade = ano - fAno.value
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            var genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute("src", "imagens/hcrianca.png")
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute("src", "imagens/hjovem.png")
            } else if (idade < 60) {
                //Adulto
                img.setAttribute("src", "imagens/hadulto.png")
            } else {
                //Idoso
                img.setAttribute("src", "imagens/hidoso.png")
            }
        } else {
            var genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute("src", "imagens/mcrianca.png")
            } else if (idade <= 21) {
                //Jovem
                img.setAttribute("src", "imagens/mjovem.png")
            } else if (idade < 60) {
                //Adulto
                img.setAttribute("src", "imagens/madulto.png")
            } else {
                //Idoso
                img.setAttribute("src", "imagens/midoso.png")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}