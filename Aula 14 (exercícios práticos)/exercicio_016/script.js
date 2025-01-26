function calcular() {
    var vI = Number(document.getElementById("vI").value)
    var vF = Number(document.getElementById("vF").value)
    var vIn = Number(document.getElementById("vIn").value)
    var res = document.getElementById("res")
    res.innerHTML = ``

    if (vI < vF) {
    if (vI != "" || vF != "" || vIn != "") {
        if (vI != vF) {
            if (vIn > 0) {
                for (var c = vI; c <= vF ; c += vIn) {
                    res.innerHTML += `${c} `
                    res.style.padding = "20px"
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
    
    } else {
        if (vI != "" || vF != "" || vIn != "") {
            if (vI != vF) {
                if (vIn > 0) {
                    for (var c = vI; c >= vF; c -= vIn) {
                        res.innerHTML += `${c} `
                        res.style.padding = "20px"
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
}
