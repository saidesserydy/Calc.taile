const maTaille = document.querySelector('#taille');
const monAge = document.querySelector('#age')
const monIcon = document.querySelector('#icon')
let answer = document.querySelector("#answer")

var result = document.querySelector('.envoi');

if (localStorage.length > 0) {
    answer.innerHTML = 'Votre IMC est:' + localStorage.getItem("a") + "kg";
}
function calcul() {
    let a = maTaille.value
    let b = monAge.value
    localStorage.setItem("a", ((a - 100 + b / 10) * 0.9))
    return (a - 100 + b / 10) * 0.9;
}

result.addEventListener("click", () => {
    answer.innerHTML = ""
    answer.innerHTML = 'Votre IMC est:' + calcul().toFixed(2) + "kg";
})
