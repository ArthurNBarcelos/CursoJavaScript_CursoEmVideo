var agora = new Date
var hora = agora.getHours()
if (hora != 1) {
    console.log (`Agora são ${hora} horas`)
} else {
    console.log (`Agora são ${hora} hora`)
}


/*
Boa madrugada < 6
Bom dia < 12
Boa tarde < 19
Boa noite < 24
*/

if (hora < 6) {
    console.log("Boa madrugada!")
} else if (hora < 12) {
    console.log("Bom dia!")
} else if (hora < 19) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}