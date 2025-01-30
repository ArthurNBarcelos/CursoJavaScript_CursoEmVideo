function calcular() {
    let num = Number(document.getElementById('numero').value)
    let tabuada = document.getElementById('tabuada')
    if (num == 0) {
        alert('Por favor, digite um número!')
    } else {
        tabuada.innerHTML = ''
       let contador = 1
       while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${contador} = ${num*contador}`
            //item.value = `tabuada${contador}` //Serve para identificar o item selecionado, mas não utilizando o JavaScritp, mas talvez uma tecnologia de back-end
            tabuada.appendChild(item)
            contador++
       }
    }
}


/*
    Fazer um site que calcule a tabuada de um número X, de 1 até 10

    Exemplo:
    Número: 10
     10 x 1 = 10
     10 x 2 = 20
     10 x 3 = 30
     10 x 4 = 40
     10 x 5 = 50
     10 x 6 = 60
     10 x 7 = 70
     10 x 8 = 80
     10 x 9 = 90
     10 x 10 = 100

    Utilizar um "select", uma lista em HTML onde ficará a tabuada
*/