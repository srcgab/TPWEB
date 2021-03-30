const perguntaEl= document.querySelector('#pergunta');
const alternativa = Array.from(document.querySelectorAll('.alternativa'));
const progresso = document.querySelector('#progresso');
const pontuacaoEl = document.querySelector('#pontuacao');
const barraProgressoCompleta = document.querySelector('#barra-completa');


let perguntaAtual = {}
let aceitarPergunta = true
let pontos = 0
let contadorPergunta = 0
let perguntasRestantes = []

// criando as perguntas e as alternativas

let perguntas = [
    {
	perguntaEl: "Quem foram os primeiros criadores da tabela periódica?",
	alternativa1: "Dimitri Ivanovich e Marie Curie;",
	alternativa2: "Lothar Meyer e Dimitri Ivanovich",
	alternativa3: "Lother Meyer e Pierre Curie",
	alternativa4: "Marie Curie e Pierre Curie",    
	correto: "2",
    },
    {
	perguntaEl: "Qual o número atômico e a família/grupo do elemento Cloro, respectivamente?",
	alternativa1: "35 e Halogênios;",
	alternativa2: "17 e Calcogênios",
	alternativa3: "35 e Calcogênios",
	alternativa4: "17 e Halogênios",
	correto: "4",
    },
    {
	perguntaEl: "O elemento cujo símbolo é At é classificado como:",
	alternativa1: "Metal",
	alternativa2: "Semimetal",
	alternativa3: "Ametal",
	alternativa4: "Gás Nobre",
	correto: "3",
    },
    {
	perguntaEl: "Considerando os elementos Boro e e Flúor, responda:",
	alternativa1: "O raio atômico do Boro é maior que o do Flúor",
	alternativa2: "O raio atômico do Boro é equivalente ao do Flúo",
	alternativa3: "O raio atômico do Boro é menor que o do Flúor",
	alternativa4: "Ambos os raios atômicos são pequenos demais e devem ser desprezados",
	correto: "1",
    },
    {
	  perguntaEl: "O elemento cujo símbolo é Cr é classificado como:",
	  alternativa1: "Ametal",
	  alternativa2: "Semimetal",
	  alternativa3: "Gás nobre",
	  alternativa4: "Metal",
	  correto: "4" ,
    },
    {
	  perguntaEl: "Em qual período se encontra o elemento de número 89?",
	  alternativa1: "6",
	  alternativa2: "7",
	  alternativa3: "8",
	  alternativa4: "9",
	  correto: "2" 
    },
    {
	  perguntaEl: "Qual o nome dado à família 3A?",
	  alternativa1: "Família do Carbono;",
	  alternativa2: "Calcogênios",
	  alternativa3: "Família do Bromo",
	  alternativa4: "Família do Boro",
	  correto: "4",
	},
	{
	  perguntaEl: "Qual a massa atômica do elemento Antimônio, aproximadamente?",
	  alternativa1: "51",
	  alternativa2: "209",
	  alternativa3: "122",
	  alternativa4: "55",
	  correto: "3",
    }
]

// marcando os pontos 

const pontuacaoTotal = 100
const totalDePerguntas = 8

// pegar primeira pergunta & registrar primeiro ponto

iniciarJogo = () => {
    contadorPergunta = 0
    pontos = 0
    perguntasRestantes = [...perguntas]
    pegarNovaPergunta()
}

// próximas perguntas e alternativas 

pegarNovaPergunta = () => {
    if(perguntasRestantes.length === 0 || contadorPergunta > totalDePerguntas) {
        localStorage.setItem('ultimaPontuacao', pontos)

        return window.location.assign('final.html')
    }

    contadorPergunta++
    progresso.innerText = `PERGUNTA ${contadorPergunta} DE ${totalDePerguntas}`
    barraProgressoCompleta.style.width = `${(contadorPergunta/totalDePerguntas) * 100}%`
    
    const perguntasIndex = Math.floor(Math.random() * perguntasRestantes.length)
    perguntaAtual = perguntasRestantes[perguntasIndex]
    perguntaEl.innerText = perguntaAtual.perguntaEl

    alternativa.forEach(perguntaEl => {
        const numero = perguntaEl.dataset['numero']
        perguntaEl.innerText = perguntaAtual['perguntaEl' + numero]
    })

    perguntasRestantes.splice(perguntasIndex, 1)

    aceitarPergunta = true

}

alternativa.forEach(perguntaEl => {
    perguntaEl.addEventListener('click', e => {
        if(!aceitarPergunta)return

        aceitarPergunta = false
        const selecionarAlternativa = e.target
        const selecionarPergunta = selecionarAlternativa.dataset['numero']

        let classePraAplicar  = selecionarPergunta == perguntaAtual.correto ? 'correto' : 'incorreto'

        if(classePraAplicar === 'correto') {
            inserePontos(pontuacaoTotal)
        }

        selecionarAlternativa.parentElement.classList.add(classePraAplicar)

        setTimeout(() => {
            selecionarAlternativa.parentElement.classList.remove(classePraAplicar)
            pegarNovaPergunta()

        }, 1000)
    })
})

inserePontos = num => {
    pontos += num
    pontuacaoEl.innerText = pontos
}

iniciarJogo()