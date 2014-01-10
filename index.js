var nJogadores = 0;
//Guarda o numero de Jogadores para construir as divs de acordo
var pontosI = 20;
//Guarda os pontos com que se começa
var pontos = [];
//Guarda os Pontos de Cada Um
var soma = 5;
//Auxiliar nas Contas
var nomes = [];
//Guarda os Nomes dos Jogadores
var divPontos = [];
//Para criar a div nova com a actulização dos pontos
var dinheiro = [];
//Guarda os ganhos de cada um
var dim;
//Dimensão das Divs

$(document).ready(function() {
	document.addEventListener("orientationchange", onOrientation, false);
});


function onDeviceReady() {
	dim = document.getElementById('novosJogadores').offsetWidth;
	document.getElementById('novosJogadores').setAttribute("style", "height:" + dim + "px");
	document.getElementById('fimJogo').setAttribute("style", "height:" + dim + "px");
	document.getElementById('topContainer').setAttribute("style", "height:" + dim + "px");
	document.addEventListener("orientationchange", onOrientation, false);
}

function onOrientation(){
	alert("lol");
	dim = document.getElementById('novosJogadores').offsetWidth;
	document.getElementById('novosJogadores').setAttribute("style", "height:" + dim + "px");
	document.getElementById('fimJogo').setAttribute("style", "height:" + dim + "px");
	document.getElementById('topContainer').setAttribute("style", "height:" + dim + "px");
};

function teste() {
	alert("lol");
	var div = document.createElement('div');
	div.setAttribute("id", "teste");
	document.getElementById("body").appendChild(div);
}

function inserirDados() {
	if (confirm("Deseja Começar um jogo Novo? Todos os dados anteriores serão apagados.")) {
		var midContainer = document.getElementById('midContainer');
		var bottomContainer = document.getElementById('bottomContainer');
		while (midContainer.firstChild) {
			midContainer.removeChild(midContainer.firstChild);
		}
		while (bottomContainer.firstChild) {
			bottomContainer.removeChild(bottomContainer.firstChild);
		}
		do {
			nJogadores = prompt("Quantos Jogadores? (4 ou 5)");
		} while(nJogadores!=4 && nJogadores!=5);

		do {
			pontosI = prompt("Quantos Pontos?");
		} while(isNaN(pontosI) || pontosI<=0);
		if (nJogadores == 4) {

		}
		for (var i = 1; i <= nJogadores; i++) {
			do {
				nomes[i] = prompt("Nome do Jogador " + i + "?");
			} while(nomes[i] == "" || nomes[i] == null);
			var div = document.createElement('div');
			div.setAttribute("class", "jogadores");
			div.setAttribute("id", "div" + i);
			if (nJogadores == 4) {
				div.setAttribute("style", "width:23%");
			};
			midContainer.appendChild(div);

			var nome = document.createElement("div");
			nome.setAttribute("class", "nome");
			nome.innerHTML = nomes[i];
			div.appendChild(nome);

			var din = document.createElement("div");
			din.setAttribute("class", "dinheiro");
			din.setAttribute("id","dinheiro"+i);
			dinheiro[i] = 0;
			din.innerHTML = "$:" + dinheiro[i];
			div.appendChild(din);

			divPontos[i] = document.createElement("div");
			divPontos[i].innerHTML = pontosI;
			divPontos[i].setAttribute("style", "width:100%; height:auto;");
			div.appendChild(divPontos[i]);
			pontos[i] = pontosI;
		}
	}
}

function fimJogada() {
	for (var i = 1; i <= nJogadores; i++) {
		if(pontos[i]<=0){return;}
	}
	for (var i = 1; i <= nJogadores; i++) {
		if(pontos[i]<=0){break;}
		soma = prompt("Quantas vazas fez o " + nomes[i] + "?");
		if (soma) {
			if (isNaN(soma)) {
				pontos[i] = parseInt(pontos[i], 10);
				divPontos[i] = document.createElement('div');
				divPontos[i].innerHTML = "--";
				divPontos[i].setAttribute("style", "width:100%");
				divPontos[i].setAttribute("style", "height:auto");
				document.getElementById("div" + i).appendChild(divPontos[i]);
			} else {
				if (soma == 0) {
					soma = -5;
				};
				pontos[i] = parseInt(pontos[i], 10) - parseInt(soma, 10);
				divPontos[i] = document.createElement('div');
				divPontos[i].innerHTML = pontos[i];
				divPontos[i].setAttribute("style", "width:100%");
				divPontos[i].setAttribute("style", "height:auto");
				document.getElementById("div" + i).appendChild(divPontos[i]);
			}
		} else {
			pontos[i] = parseInt(pontos[i], 10);
			divPontos[i] = document.createElement('div');
			divPontos[i].innerHTML = "--";
			divPontos[i].setAttribute("style", "width:100%");
			divPontos[i].setAttribute("style", "height:auto");
			document.getElementById("div" + i).appendChild(divPontos[i]);

		}
	}
	for (var i = 1; i <= nJogadores; i++) {
		if (pontos[i] <= 0) {
			var div = document.createElement('div');
			var divContas = document.createElement('div');
			var img = document.createElement('img');
			var imgContas = document.createElement('img');
			var text = document.createTextNode('Jogar de Novo?');
			var textContas = document.createTextNode('Fazer Contas?');
			img.src = "imgs/1389403560_checkround-24.png";
			img.setAttribute("class", "imgs");
			imgContas.src = "imgs/1389403619_51.png";
			imgContas.setAttribute("class", "imgs");
			div.setAttribute("id", "novoJogo");
			div.setAttribute("style", "height:" + dim + "px");
			div.setAttribute("onclick", "novoJogo()");
			divContas.setAttribute("id", "contas");
			divContas.setAttribute("style", "height:" + dim + "px");
			divContas.setAttribute("onclick", "contas()");
			div.appendChild(img);
			div.appendChild(text);
			divContas.appendChild(imgContas);
			divContas.appendChild(textContas);
			document.getElementById('bottomContainer').appendChild(div);
			document.getElementById('bottomContainer').appendChild(divContas);
			calculos();
			return;
		};
	}
}

function calculos(){
	for (var i = 1; i <= nJogadores; i++){
		if(pontos[i]<=0){
			pontos[i]=0;
			var aux = i;
			for (var j = 1; j <= nJogadores; j++){
				dinheiro[aux]+=pontos[j];
				}		
			}
		else{
			dinheiro[i]-=pontos[i];
		}
	document.getElementById('dinheiro'+i).innerHTML = "$:" + dinheiro[i];
	}
}

function novoJogo() {
	var midContainer = document.getElementById('midContainer');
	while (midContainer.firstChild) {
		midContainer.removeChild(midContainer.firstChild);
	}
	for (var i = 1; i <= nJogadores; i++) {

		var bottomContainer = document.getElementById('bottomContainer');

		var div = document.createElement('div');
		div.setAttribute("class", "jogadores");
		div.setAttribute("id", "div" + i);
		if (nJogadores == 4) {
			div.setAttribute("style", "width:23%");
		};
		midContainer.appendChild(div);

		var nome = document.createElement("div");
		nome.setAttribute("class", "nome");
		nome.innerHTML = nomes[i];
		div.appendChild(nome);

		var din = document.createElement("div");
		din.setAttribute("class", "dinheiro");
		din.setAttribute("id","dinheiro"+i);
		din.innerHTML = "$:" + dinheiro[i];
		div.appendChild(din);

		divPontos[i] = document.createElement("div");
		divPontos[i].innerHTML = pontosI;
		divPontos[i].setAttribute("style", "width:100%; height:auto;");
		div.appendChild(divPontos[i]);
		pontos[i] = pontosI;

	}
	while (bottomContainer.firstChild) {
		bottomContainer.removeChild(bottomContainer.firstChild);
	}
}

