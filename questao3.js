const btn = document.querySelector ('#submit')
const return1 = document.querySelector ('#return1')
const text1 = document.querySelector ('#chao')
const text2 = document.querySelector ('#teto')
let check1
let chao
let teto

btn.addEventListener ("click", function(e) {
    e.preventDefault()
    let num1 = parseFloat(document.getElementById ('numero1').value)
    check1 = Number. isInteger(num1)

    if (isNaN(num1) || check1 == true ) {
        return1.textContent = `Insira um número não inteiro no campo acima.`
    }
    else {
        chao = Math.floor (num1)
        teto = Math.ceil (num1)
        text1.textContent = `O menor número inteiro do valor inserido é ${chao.toFixed(2)}`
        text2.textContent = `O maior número inteiro do valor inserido é ${teto.toFixed(2)}`
        return1.textContent = ``
    }
})
