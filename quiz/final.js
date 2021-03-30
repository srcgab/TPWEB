const seuNome = document.querySelector('#seu-nome')
const salvarPontosBtn = document.querySelector('#salvar-pontos-btn')
const pontoFinal = document.querySelector('#ponto-final')
const mostrarPontoMaisRecente = localStorage.getItem('mostraPontoMaisRecente')

const maioresPontuacoes = JSON.parse(localStorage.getItem('maioresPontuacoes')) || []

const maxMaiorPontuacao = 4

pontoFinal.innerText = mostrarPontoMaisRecente

seuNome.addEventListener('keyup', () => {
    salvarPontosBtn.disabled = !seuNome.value
})

salvarPontuacao = e => {
    e.preventDefault()

    const pontuacaoF = {
        pontuacaoF: mostrarPontoMaisRecente,
        name: seuNome.value
    }

    maioresPontuacoes.push(pontuacaoF)

    maioresPontuacoes.sort((a,b) => {
        return b.pontuacaoF - a.pontuacaoF
    })

    maioresPontuacoes.splice(4)

    localStorage.setItem('maioresPontuacoes', JSON.stringify(maioresPontuacoes))
    window.location.assign('indexQuiz.html')

    
}