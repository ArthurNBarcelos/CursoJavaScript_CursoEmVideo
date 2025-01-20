function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var anoNasc = document.getElementById("dataNasc").value
    var sex = document.getElementsByName("rsex")
    var idade = ano - anoNasc
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    
    if(anoNasc == 0) {
        alert("[ERRO] Você precisa digitar um ano de nascimento!")
    } else if (anoNasc > ano) {
        alert("[ERRO] Impossível utilizar anos futuros!")
    } else if (anoNasc < 1925) {
        alert("[ERRO] Ano mínimo: 1925!")
    } else {
        if (sex[0].checked) {
            //Masculino/Homem
            genero = "homem"
            if (idade < 12) {
                //Criança
                img.innerHTML = '<img src="imagens/hcrianca.png" alt="[ERRO] Impossível carregar esta imagem!">'
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
            if (idade == 0) {
                msg.innerHTML = `Um ${genero}, nascido em ${anoNasc}, possui menos de 1 ano.`
            } else if (idade == 1) {
                msg.innerHTML = `Um ${genero}, nascido em ${anoNasc}, possui ${idade} ano.`
            } else {
                msg.innerHTML = `Um ${genero}, nascido em ${anoNasc}, possui ${idade} anos.`
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
            if (idade == 0) {
                msg.innerHTML = `Uma ${genero}, nascida em ${anoNasc}, possui menos de 1 ano.`
            } else if (idade == 1) {
                msg.innerHTML = `Uma ${genero}, nascida em ${anoNasc}, possui ${idade} ano.`
            } else {
                msg.innerHTML = `Uma ${genero}, nascida em ${anoNasc}, possui ${idade} anos.`
            }
        } else {
            alert("[ERRO] Você precisa selecionar um sexo!")
        }
    }
    
}

//Criança 0 - 12
//Jovem 13 - 17
//Adulto 18 - 59
//Idoso 60