function calcular() {
    var vI = Number(document.getElementById("vI").value)
    var vF = Number(document.getElementById("vF").value)
    var vIn = Number(document.getElementById("vIn").value)
    var res = document.getElementById("res")
    res.innerHTML = ``

    if (vI != "" || vF != "" || vIn != "") {
        if (vI != vF) {
            if (vIn > 0) {
                //res.innerHTML = `${vI}, ${vF} e ${vIn}`
                for (var c = vI; c < vF ; c += vIn) {
                    res.innerHTML += `${c} `
                }
                if (c == vF) {
                    res.innerHTML += `${c} `
                }
            } else {
                alert("[ERRO] O Número de Intervalos precisa ser maior que zero!")
            }
        } else {
            alert("[ERRO] Valor Inicial e Valor Final devem ser diferentes!")
        }
    } else {
        alert("[ERRO] Por favor, preencha todos os campos!")
    }
}
