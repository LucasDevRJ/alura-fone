let listaDeBotoes = document.querySelectorAll(".principal__teclado__botao");
let entradaDoTelefone = document.querySelector(".principal__entrada");

function imprimiValorNoCampoTelefone(idTeclado) {
	entradaDoTelefone.value += idTeclado;
}

for (let i = 0; i < listaDeBotoes.length; i++) {
	let botao = listaDeBotoes[i];
	let botaoValor = botao.value;
	botao.onclick = function() {
		imprimiValorNoCampoTelefone(botaoValor);
	}
}