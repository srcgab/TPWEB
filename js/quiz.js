var perguntaAtual = 0;
var score = 0;
let i=0
let p
var correta
let cabecalho_pergunta=document.getElementById('cabecalho_pergunta')
var containerQuiz = document.getElementById('containerQuiz');
var perguntaEl = document.getElementById('pergunta');
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');
var botaoProximo = document.getElementById('btnproximo');
var resultado = document.getElementById('resultado');

let perguntas = [];
perguntas[0]={
	pergunta: "Quem foram os primeiros criadores da tabela periódica?",
	resposta1: "Dimitri Ivanovich e Marie Curie;",
	resposta2: "Lothar Meyer e Dimitri Ivanovich",
	resposta3: "Lother Meyer e Pierre Curie",
	resposta4: "Marie Curie e Pierre Curie",    
	correto: "2" 
  };
  perguntas[1]={
	pergunta: "Qual o número atômico e a família/grupo do elemento Cloro, respectivamente?",
	resposta1: "35 e Halogênios;",
	resposta2: "17 e Calcogênios",
	resposta3: "35 e Calcogênios",
	resposta4: "17 e Halogênios",
	correto: "4"
	
  };
  perguntas[2]={
	pergunta: "O elemento cujo símbolo é At é classificado como:",
	resposta1: "Metal",
	resposta2: "Semimetal",
	resposta3: "Ametal",
	resposta4: "Gás Nobre",
	correto: "3" 
  }
  perguntas[3]={
	pergunta: "Considerando os elementos Boro e e Flúor, responda:",
	resposta1: "O raio atômico do Boro é maior que o do Flúor",
	resposta2: "O raio atômico do Boro é equivalente ao do Flúo",
	resposta3: "O raio atômico do Boro é menor que o do Flúor",
	resposta4: "Ambos os raios atômicos são pequenos demais e devem ser desprezados",
	correto: "1"
	
  }
  perguntas[4]={
	  pergunta: "O elemento cujo símbolo é Cr é classificado como:",
	  resposta1: "Ametal",
	  resposta2: "Semimetal",
	  resposta3: "Gás nobre",
	  resposta4: "Metal",
	  correto: "4"
	  
  }

  perguntas[5]={
	  pergunta: "Em qual período se encontra o elemento de número 89?",
	  resposta1: "6",
	  resposta2: "7",
	  resposta3: "8",
	  resposta4: "9",
	  correto: "2"
	  
  }
  perguntas[6]={
	  pergunta: "Qual o nome dado à família 3A?",
	  resposta1: "Família do Carbono;",
	  resposta2: "Calcogênios",
	  resposta3: "Família do Bromo",
	  resposta4: "Família do Boro",
	  correto: "4"
	  
	}
	perguntas[7]={
	  pergunta: "Qual a massa atômica do elemento Antimônio, aproximadamente?",
	  resposta1: "51",
	  resposta2: "209",
	  resposta3: "122",
	  resposta4: "55",
	  correto: "3"
	  
	}
  

function carregarPergunta (i) {
	cabecalho_pergunta.innerHTML=perguntas[i].pergunta
	op1.innerHTML=perguntas[i].resposta1;
	op2.innerHTML=perguntas[i].resposta2;
	op3.innerHTML=perguntas[i].resposta3;
	op4.innerHTML=perguntas[i].resposta4;
};
let resposta_correta=perguntas[i].correto;
let tamanho=perguntas.length;
let resultadoEl=document.getElementById('result')
let colocar_resultado=document.getElementById('coloarResultado')

botaoProximo.addEventListener('click', function() {
	
	var escolha = document.querySelector('input[type=radio]:checked');
	if(!escolha){
		alert('Escolha uma resposta!');
		return;
	}
	correta = escolha.value;
	if(resposta_correta == correta){
		cabecalho_pergunta.classList.remove("errou")
		cabecalho_pergunta.classList.add("acertou")
		score += 1;
	}else{
		cabecalho_pergunta.classList.remove("acertou")
		cabecalho_pergunta.classList.add("errou")
	
	}
	
	if(tamanho-1==i){
		/*para mexer quando encerrar*/
		perguntaEl.classList.add("esconde")
		cabecalho_pergunta.classList.add("esconde")
		resultadoEl.classList.add("aparecer")
		colocar_resultado.innerHTML="Sua Pontuação foi: "+score
	}
		escolha.checked = false;
		i++;

	carregarPergunta(i);
});
carregarPergunta(i);
