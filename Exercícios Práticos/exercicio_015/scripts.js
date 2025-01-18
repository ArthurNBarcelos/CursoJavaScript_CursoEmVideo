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
        if (sexo[0].checked) {
            genero = "Homem"
        } else {
            genero = "Mulher"
        }
    }
}