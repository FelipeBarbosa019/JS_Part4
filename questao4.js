const btn = document.querySelector ('#submit')
const text = document.querySelector ('h3')
let random1
let random2
let genre
let age

btn.addEventListener ("click", function(e) {
    e.preventDefault()
    random1 = Math.random ();
    random2 = Math.random ();
    // console.log (random1)
    // console.log (random2)

    if (random1 <= 0.483) {
        genre = "masculino"
    }
    else {
        genre = "feminino"
    }

    if (random2 > 0.167) {
        age = "não-idoso(a)"
    }
    else {
        age = "idoso"
    }

    text.textContent = `O sorteio é que a pessoa em questão referese à uma pessoa do sexo ${genre} e ${age}.`
})