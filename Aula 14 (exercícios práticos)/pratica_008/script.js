function calcular() {
    let nI = Number(document.getElementById('nI').value)
    let nF = Number(document.getElementById('nF').value)
    let nIn = Number(document.getElementById('nIn').value)
    let res = document.getElementById('resultado')
    res.innerHTML = ``

    if (nI != "" || nF != "" || nIn != "") {
        if (nIn != 0) {
            if (nI != nF) {
                if (nI < nF) {
                    for (c = nI ; c <= nF ; c += nIn) {
                        res.innerHTML += `${c} `
                    }
                } else {
                    for (c = nI ; c >= nF ; c -= nIn) {
                        res.innerHTML += `${c} `
                    }
                }
            } else {
                alert('ERRO: O número inicial e final não podem ser iguais!')
            }
        } else {
            alert('ERRO: O intervalo não pode ser 0!')
        }
    } else {
        alert('ERRO: Preencha todos os campos!')
    }
}

/*
Contade de X a Y com Z intervalos
*/