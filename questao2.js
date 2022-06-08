const btn = document.querySelector ('#submit')
const return1 = document.querySelector ('#return1')
const return2 = document.querySelector ('#return2')
const text = document.querySelector ('h3')
let numx
let check1
let check2


btn.addEventListener ("click", function(e) {
    e.preventDefault()
    let num1 = parseFloat(document.getElementById ('numero1').value)
    let num2 = parseFloat(document.getElementById ('numero2').value)
    check1 = Number. isInteger(num1)
    check2 = Number. isInteger(num2)

    if (num1>num2){
        alert("Erro: O valor minimo é maior que o máximo")
    }

    if ((isNaN(num1)) || (check1 == false)) {
        return1.textContent = `Insira um número inteiro no campo acima.`
    }

    if ((isNaN(num2)) || (check2 == false))  {
        return2.textContent = `Insira um número inteiro no campo acima.`
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    numx = getRandomArbitrary (num1,num2);
    text.textContent = `O número sorteado foi ${numx.toFixed(2)}`
})

