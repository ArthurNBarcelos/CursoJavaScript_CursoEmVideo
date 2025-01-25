/*
    Um site para fazer uma contagem de X número até Y número e pular de Z em Z.

    Vai aparecer a contagem no site, exemplo:
    De: 1
    Até: 10
    Pulando: 2
    Restultado: 1, 3, 5, 7, 9, FIM

    Impossível pular de 0 em 0, então, será usado 1 (1, 2, 3...)
*/

//Salvar as entradas do usuário
var nInicial = document.getElementById("nInicial")
var nFinal = document.getElementById("nFinal")
var nInter = document.getElementById("nInter")

function contar() {
    var contagem = document.getElementById("contagem")
    if(nInicial < nFinal) {
        while(nInicial <= nFinal) {
            console.log(nInicial)
            nInicial = nInicial + nInter
        }
    } else {
        while(nInicial >= nFinal) {
            console.log(nInicial)
            nInicial = nInicial - nInter
        }
    }
}

/*
  nInicial = 0
  nFinal = 10
  nInter = 2

  0,2,4,6,8,10
*/

/*
var nInicial = 100
var nFinal = 50
var nInter = 1

if (nInicial < nFinal) {
    while (nInicial <= nFinal) {
        console.log(nInicial)
        nInicial = nInicial + nInter
    }
} else {
    while (nInicial >= nFinal) {
        console.log(nInicial)
        nInicial = nInicial - nInter
    }
}
*/