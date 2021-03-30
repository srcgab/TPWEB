const melhoresLista = document.querySelector('#melhores-lista')
const pontuacaoFinal = JSON.parse(localStorage.getItem("ponto-final")) || []

melhoresLista.innerHTML =
pontuacaoFinal.map(pontos => {
    return `<li class="ponto-final">${pontos.name} - ${pontos.pontos}</li>`
}).join("")
