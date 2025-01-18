var agora = new Date()
var diaSemana = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch (diaSemana) {
    case 0:
        var diaSemanaTxt = "Domingo"
        break
    case 1:
        var diaSemanaTxt = "Segunda"
        break
    case 2:
        var diaSemanaTxt = "Terça"
        break
    case 3:
        var diaSemanaTxt = "Quarta"
        break     
    case 4:
        var diaSemanaTxt = "Quinta"
        break
    case 5:
        var diaSemanaTxt = "Sexta"
        break     
    case 6:
        var diaSemanaTxt = "Sábado"
}

console.log(`Hoje é ${diaSemanaTxt}`)