const btn = document.querySelector ('#submit')
const text = document.querySelector ('h3')
const text2 = document.querySelector ('h4')
let result
let IMC

btn.addEventListener ("click", function(e) {
    e.preventDefault()
    const peso = parseFloat(document.getElementById ('peso').value.replace(',','.'))
    const altura = parseFloat(document.getElementById ('altura').value.replace(',','.'))
   
    if (isNaN(peso) || isNaN(altura)) {
        alert (`Os valores inseridos não são válidos`)
    }
    else {
        IMC = ((peso)/(altura*altura))
        text.textContent = `O Índice de Massa Corporal é ${IMC.toFixed(1)}.`
    }
    
    if (IMC<18.5) {
        text2.textContent = `Classificação: abaixo do peso.`
    }
    else if (18.5 < IMC && IMC <= 24.9) {
        text2.textContent = `Classificação: peso normal`
    }
    else if (24.9 < IMC && IMC <= 29.9) {
        text2.textContent = `Classificação: sobrepeso`
    }
    else if (IMC > 29.9) {
        text2.textContent = `Classificação: obesidade`
    }
});
