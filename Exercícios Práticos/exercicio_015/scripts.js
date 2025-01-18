function botao_verificar() {
    //Data e Ano Atual
    var data = new Date
    var ano = data.getFullYear()
    //Inputs
    var anonasc = window.document.getElementById("anonasc")
    var sexo = window.document.getElementsByName("sexo") //0 masc 1 fem

    //Atalhos
    var resultado = window.document.querySelector("div#resultado")

    if (anonasc.value.length == 0) { //Vazio ou > q ano atual
        alert("ERRO: Verifique o ano de nascimento e tente novamente!")
    } else {
        var idade = ano - anonasc.value
        var genero = ''
        var img = window.document.createElement("img") //Criando um elemento por DOM
        img.setAttribute("id", "foto") //Definindo o Id

        if (sexo[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 14) {
                //Criança
                img.setAttribute("src", "imagens/hcrianca.png")
            } else if (idade < 21) {
                //Jovem
            } else if (idade < 60) {
                //Adulto
            } else {
                //Idoso
            }
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade < 14) {
                //Criança
            } else if (idade < 21) {
                //Jovem
            } else if (idade < 60) {
                //Adulto
            } else {
                //Idoso
            }
        }
        resultado.append(img)
    }
}

/*
Checkar se é homem ou mulher
Checkar idade
    Criança: 0 - 13
    Jovem: 14 - 20
    Adulto: 21 - 60
    Idoso: 60 -
*/