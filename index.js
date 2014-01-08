var nJogadores = 0;
var pontosI = 20;
var pontos = [];
var soma = [5];
var nomes = [];
var divPontos = [];
var dinheiro = [];
var dim;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	dim = document.getElementById('novosJogadores').offsetWidth;
	document.getElementById('novosJogadores').setAttribute("style", "height:" + dim + "px");
	document.getElementById('fimJogo').setAttribute("style", "height:" + dim + "px");
	document.getElementById('topContainer').setAttribute("style", "height:" + dim + "px");
}

function teste(){
	var div = document.createElement('div');
	div.setAttribute("id","teste");
	document.getElementById("body").appendChild(div);
}
function inserirDados() {
	if(confirm("Deseja Começar um jogo Novo? Todos os dados anteriores serão apagados.")){
	var container = document.getElementById('midContainer');
	var container2 = document.getElementById('bottomContainer');
			while (container.firstChild) {
			container.removeChild(container.firstChild);
		}
			while (container2.firstChild) {
		container2.removeChild(container2.firstChild);
	}
	do {
		nJogadores = prompt("Quantos Jogadores? (4 ou 5)");
	} while(nJogadores!=4 && nJogadores!=5);

	do {
		pontosI = prompt("Quantos Pontos?");
	} while(isNaN(pontosI) || pontosI<=0);

	for (var i = 1; i <= nJogadores; i++) {
		do{
		nomes[i] = prompt("Nome do Jogador " + i + "?");
		}while(nomes[i] == "" || nomes[i] == null);
		var div = document.createElement('div');
		div.setAttribute("class", "jogadores");
		div.setAttribute("id", "div" + i);
		if (nJogadores == 4) {
			div.setAttribute("style", "width:23%");
		};
		container.appendChild(div);
		document.getElementById('div' + i).innerHTML = nomes[i];
		divPontos[i] = document.createElement('div');
		divPontos[i].innerHTML = pontosI;
		divPontos[i].setAttribute("style", "width:100%");
		divPontos[i].setAttribute("style", "height:auto");
		document.getElementById('div' + i).appendChild(divPontos[i]);
		pontos[i] = pontosI;
	}
	}
}

function fimJogada() {

	for (var i = 1; i <= nJogadores; i++) {
		soma[i] = prompt("Quantas vazas fez o " + nomes[i] + "?");
		if(soma[i]){
		if (isNaN(soma[i])) {
			divPontos[i] = document.createElement('div');
			divPontos[i].innerHTML = "--";
			divPontos[i].setAttribute("style", "width:100%");
			divPontos[i].setAttribute("style", "height:auto");
			document.getElementById('div' + i).appendChild(divPontos[i]);
		} else {
			if (soma[i] == 0) {
				soma[i] = -5
			};
			pontos[i] = parseInt(pontos[i], 10) - parseInt(soma[i], 10);
			divPontos[i] = document.createElement('div');
			divPontos[i].innerHTML = pontos[i];
			divPontos[i].setAttribute("style", "width:100%");
			divPontos[i].setAttribute("style", "height:auto");
			document.getElementById('div' + i).appendChild(divPontos[i]);
		}
		}
		else{
			divPontos[i] = document.createElement('div');
			divPontos[i].innerHTML = "--";
			divPontos[i].setAttribute("style", "width:100%");
			divPontos[i].setAttribute("style", "height:auto");
			document.getElementById('div' + i).appendChild(divPontos[i]);
			
		}
	}
	for (var i = 1; i <= nJogadores; i++) {
		if (pontos[i] <= 0) {
			var div = document.createElement('div');
			var img = document.createElement('img');
			var text = document.createTextNode('Jogar de Novo?');
			img.src = "imgs/1389227658_checkmark-24.png";
			img.setAttribute("style", "width:25%; height 50%; margin-left:37.5%; margin-top:7.5%; display: block;");
			div.setAttribute("id", "novoJogo");
			div.setAttribute("style", "height:" + dim + "px");
			div.setAttribute("onClick", "novoJogo()");
			div.appendChild(img);
			div.appendChild(text);
			document.getElementById('bottomContainer').appendChild(div);
			break;
		};
	}
}

function novoJogo() {
	for (var i = 1; i <= nJogadores; i++) {
		var container = document.getElementById('div' + i);
		var container2 = document.getElementById('bottomContainer');
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}
		var div = document.createElement('div');
		div.setAttribute("class", "jogadores");
		div.setAttribute("id", "div" + i);
		if (nJogadores == 4) {
			div.setAttribute("style", "width:25%");
		};
		document.getElementById('midContainer').appendChild(div);
		document.getElementById('div' + i).innerHTML = nomes[i];
		divPontos[i] = document.createElement('div');
		divPontos[i].innerHTML = pontosI;
		divPontos[i].setAttribute("style", "width:100%");
		divPontos[i].setAttribute("style", "height:auto");
		document.getElementById('div' + i).appendChild(divPontos[i]);
		pontos[i] = pontosI;
	}
	while (container2.firstChild) {
		container2.removeChild(container2.firstChild);
	}
}