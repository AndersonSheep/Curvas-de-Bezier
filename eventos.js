var opcao;
var contCurva = 1;

function inserirCurva() {
	curvasControle.push(CriarCurva());

	opcao = document.createElement("option");
	opcao.text = "Curva " + contCurva + "";

	selectCampo.appendChild(opcao);

	selectCampo.selectedIndex = curvasControle.length - 1;
	curvaSelecionada = selectCampo.selectedIndex;
	interacoes.value = 100;
	checkCurva.checked = true;
	checkPontos.checked = true;
	checkPoligonais.checked = true;
	contCurva++;
}

function mudarCurva() {

	curvasSel = curvasControle[curvaSelecionada];


	curvaSelecionada = selectCampo.selectedIndex;
	checkCurva.checked = curvasSel.desenharCurva;
	checkPontos.checked = curvasSel.desenharPontos;
	checkPoligonais.checked = curvasSel.desenharPoligonais;
	interacoes.value = curvasSel.interacoes;
	Redesenhar();
}

function excluirCurva() {
	var indexEscolhido = selectCampo.selectedIndex;

	console.log(selectCampo.selectedIndex);
	var pai = document.getElementById("selectCampo");
	var removerEste = pai.getElementsByTagName("option")[indexEscolhido];
	console.log(removerEste);
	pai.removeChild(removerEste);

	curvasControle.splice(indexEscolhido, 1);
	//opcao.getElementByName("Curva "+selectCampo.selectedIndex);



	console.log(selectCampo.selectedIndex);
	//opcao.removeChild(opcao.getElementByName("Curva "+selectCampo.selectedIndex));
	Redesenhar();
}

function modificarInteracoes() {
	curvasControle[curvaSelecionada].interacoes = interacoes.value;
	Redesenhar();
}

function modificarVisualizacaoCurva() {
	curvasControle[curvaSelecionada].desenharCurva = checkCurva.checked;
	Redesenhar();
}

function modificarVisualizacaoPoligonal() {
	curvasControle[curvaSelecionada].desenharPoligonais = checkPoligonais.checked;
	Redesenhar();
}

function modificarVisualizacaoPontos() {
	curvasControle[curvaSelecionada].desenharPontos = checkPontos.checked;
	Redesenhar();
}



//clicar para a criação de um ponto
canvas.addEventListener('click', function (e) {
	if (!moveu) {
		criarPCntr(e.offsetX, e.offsetY);
		Redesenhar();
	} else {
		moveu = false;
	}
});

//clicar no botão esquerdo do mouse para apagar um ponto de controle
canvas.addEventListener('contextmenu', function (e) {

	e.preventDefault();
	apagarPontoControle(e.offsetX, e.offsetY);
	Redesenhar();
});

//Verificar ponto atual
canvas.addEventListener('mousedown', function (e) {

	if (PontoAtual(e.offsetX, e.offsetY)) {
		apertando = true;
	}

});

//Mover mouse
canvas.addEventListener('mousemove', function (e) {

	if (apertando) {
		moverPnt(e.offsetX, e.offsetY);
		moveu = true;
		Redesenhar();
	}

});

//soltar o botão esqerdo do mouse
canvas.addEventListener('mouseup', function (e) {
	apertando = false;
});