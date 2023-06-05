let listaDeBotoes = document.querySelectorAll(".principal__teclado__botao");
let entradaDoTelefone = document.querySelector(".principal__entrada");

function imprimiValorNoCampoTelefone(idTeclado) {
	entradaDoTelefone.value += idTeclado;
}

for (let i = 0; i < listaDeBotoes.length; i++) {
	let botao = listaDeBotoes[i];
	let botaoValor = botao.value;

	if (botao.key === "Backspace" || botao.key === "Enter") {
		botao.classList.add("ativa");
    } 

	botao.onclick = function() {
		imprimiValorNoCampoTelefone(botaoValor);
	}
}