function calcular() {
    let numb = Number(document.getElementById('num').value)
    let selec = document.getElementById('selec')
    selec.innerHTML = ''
    if (numb != 0) {
        for (c = 1 ; c <= 10 ; c++) {
            let tabuada = document.createElement('option')
            tabuada.text = `${numb} x ${c} = ${numb*c}`
            selec.appendChild(tabuada)
        }
    } else {
        alert('Por favor, digite um número!')
    }
}