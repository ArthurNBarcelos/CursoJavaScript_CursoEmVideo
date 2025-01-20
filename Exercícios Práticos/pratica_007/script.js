function verificar() {
    data = new Date
    ano = data.getFullYear()
    anoNasc = document.getElementById("dataNasc").value
    sex = document.getElementsByName("rsex")
    idade = ano - anoNasc
    msg = document.getElementById("msg")
    img = document.getElementById("img")
    
    if(anoNasc == 0) {
        alert("[ERRO] Você precisa digitar um ano de nascimento!")
    } else if (anoNasc > ano) {
        alert("[ERRO] Impossível utilizar anos futuros!")
    } else {
        if (sex[0].checked) {
            //Masculino/Homem
            genero = "homem"
            if (idade < 12) {
                //Criança
                img.innerHTML = '<img src="imagens/hcrianca.png" alt="[ERRO] Impossível carregar esta imagem!">'
                sexIdade
            } else if (idade < 18) {
                //Jovem
                img.innerHTML = '<img src="imagens/hjovem.png" alt="[ERRO] Impossível carregar esta imagem!">'
            } else if (idade < 60) {
                //Adulto
                img.innerHTML = '<img src="imagens/hadulto.png" alt="[ERRO] Impossível carregar esta imagem!">'
            } else {
                //Idoso
                img.innerHTML = '<img src="imagens/hidoso.png" alt="[ERRO] Impossível carregar esta imagem!">'
            }
        } else if (sex[1].checked) {
            //Feminino/Mulher
            genero = "mulher"
            if (idade < 12) {
                //Criança
                img.innerHTML = '<img src="imagens/mcrianca.png" alt="[ERRO] Impossível carregar esta imagem!">'
            } else if (idade < 18) {
                //Jovem
                img.innerHTML = '<img src="imagens/mjovem.png" alt="[ERRO] Impossível carregar esta imagem!">'
            } else if (idade < 60) {
                //Adulto
                img.innerHTML = '<img src="imagens/madulto.png" alt="[ERRO] Impossível carregar esta imagem!">'
            } else {
                //Idoso
                img.innerHTML = '<img src="imagens/midoso.png" alt="[ERRO] Impossível carregar esta imagem!">'
            }
        } else {
            alert("[ERRO] Você precisa selecionar um sexo!")
        }
        if (sex[0].checked) {
            //Masculino
            alert('aa')
        } else {
            alert('aaa')
        }
    }
}

//Criança 0 - 12
//Jovem 13 - 17
//Adulto 18 - 59
//Idoso 60