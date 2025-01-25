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