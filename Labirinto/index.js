var cromossomos = [];
var fraseObjetivo = "A dúvida é o princípio da sabedoria";
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzéíú ";
var achou = false;
var passos = 0;
var nroCortes = 1;
var taxaMutacao = 0.25;
var tamanho = 35;
var populacao = 2000;

function iniciar() {
	$("#res").html("");
	nroCortes = $("#pontosCorte").val();
	taxaMutacao = $("#taxaMutacao").val();
	fraseObjetivo = $("#frase").val();
	tamanho = fraseObjetivo.length;
	achou = false;
	passos = 0;
 var i, j;

	populacao = $("#populacao").val();
    for (i =0; i < populacao; i++) {
    	var string = "";
		for (j =0; j < tamanho; j++) {
			string += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		var vetor = [];
		vetor["string"] = string;
		vetor["distancia"] = calcularFitness(string, fraseObjetivo);
		cromossomos[i] = vetor;
    }
    while (!achou) {
    	passos++;
    	console.log(passos);

    	var vetorOrdenado = cromossomos.sort(compare);
		var vetoresSorteio = [];
    	for (i = 0; i < (populacao * 0.60); i++) {
    		vetoresSorteio.push(vetorOrdenado[i]);
    	}

    	cromossomos = [];
    	var count = 0;
    	var totalDeveMutar = (populacao/2) * taxaMutacao;
    	var mutados = 0;
		for (var i = 0; i < (populacao/2); i++) {
			var pos = Math.floor(Math.random() * (populacao * 0.60));	
			var igual = true;
			while (igual) {
				var pos2 = Math.floor(Math.random() * (populacao * 0.60));
				if (pos2 != pos) {
					igual = false;
				}
			}

			var filho1 = vetoresSorteio[pos]["string"];
			var filho2 = vetoresSorteio[pos2]["string"];
			
			if (nroCortes == 2) {
				var valido = false;
				while (!valido) {
					pontoCorte = Math.floor(Math.random() * (tamanho - 1) + 1);
					pontoCorte1 = Math.floor(Math.random() * (tamanho - 1) + 1);
					if (pontoCorte < pontoCorte1) {
						valido = true;
					}
				}
				var novoFilho1 = filho1.substr(0, pontoCorte) + filho2.substr(pontoCorte, (pontoCorte1 - pontoCorte)) + filho1.substr(pontoCorte1);
				var novoFilho2 = filho2.substr(0, pontoCorte) + filho1.substr(pontoCorte, (pontoCorte1 - pontoCorte)) + filho2.substr(pontoCorte1);
			} else {
				var pontoCorte = Math.floor(Math.random() * (tamanho - 1) + 1);
				var novoFilho1 = filho1.substr(0, pontoCorte) + filho2.substr(pontoCorte);
				var novoFilho2 = filho2.substr(0, pontoCorte) + filho1.substr(pontoCorte);
			}

			
			//Mutação
			if (mutados < totalDeveMutar) {

				var pontoMutacao1 = Math.floor(Math.random() * (tamanho - 1));
				var pontoMutacao2 = Math.floor(Math.random() * (tamanho - 1));
				//console.log("FILHO 1" + novoFilho1);
				var novoFilho1 = novoFilho1.substr(0, pontoMutacao1 -1) + possible.charAt(Math.floor(Math.random() * possible.length)) + novoFilho1.substr(pontoMutacao1);
				var novoFilho2 = novoFilho2.substr(0, pontoMutacao2 -1) + possible.charAt(Math.floor(Math.random() * possible.length)) + novoFilho2.substr(pontoMutacao2);
				mutados++;
			}
			vetor = [];
			vetor["string"] = novoFilho1;
			vetor["distancia"] = calcularFitness(novoFilho1, fraseObjetivo);
			cromossomos[count] = vetor;
			count++;
			vetor["string"] = novoFilho2;
			vetor["distancia"] = calcularFitness(novoFilho2, fraseObjetivo);
			cromossomos[count] = vetor;
			count++;
		};

    	cromossomos = cromossomos.sort(compare);

    	for (i = (populacao * 0.80); i < populacao; i++) {
    		cromossomos[i] = vetorOrdenado[i];
    	}

    	$.each(cromossomos, function(key, value){
    		if (!achou) {
	    		if (value["distancia"] == 0) {
	    			achou = true;
					$("#res").html("<br/>A frase <b>" + value["string"] + "</b> foi encontrada em " + passos + " passos.");
	    			return true;
	    		}
	    	}
    	});
    }
}

$(document).ready(function() {
    console.log( "ready!" );
    var individuo = new Individuo();
    individuo.calcularFitness();
    
});


function calcularFitness(palavra1, palavra2) {
	var distancia = 0;
	for (var i = 0; i < tamanho; i++) {
		if (palavra1[i] != palavra2[i]) {
			distancia++;
		}
	}
	return distancia;
}

function compare(a,b) {
  if (a["distancia"] < b["distancia"])
    return -1;
  if (a["distancia"] > b["distancia"])
    return 1;
  return 0;
}