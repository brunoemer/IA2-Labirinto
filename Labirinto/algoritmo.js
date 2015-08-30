function Algoritmo() {
	this.achou = false;
	this.numeroMaximoInteracoes = 10;
	this.interacoes = 0;

	this.calcular = function() {
		var populacao = new Populacao($("#populacao").val(), $("#taxaMutacao").val(), $("#taxaCrossOver").val(), $("#taxaElitismo").val(), $("#pontosCorte").val());
    	populacao.gerarPopulacao();
    	populacao.ordenar();

    	this.interacoes = 0;
    	while (!this.achou) {
    		populacao.ordenar();
    		populacao.calcularNovosCromossomos();
    		populacao.ordenar();
    		populacao.elitismo();
    		populacao.ordenar();
    		var objetivo = populacao.objetivo();
//    		console.info(objetivo);
    		if (objetivo.achou) {
    			console.info("Resultado");
    			console.dir(objetivo.individuo);
    			break;
    		}
    		if (this.interacoes > this.numeroMaximoInteracoes) {
    			alert("Nao achou");
    			console.info(populacao);
    			break;
    		}
    		this.interacoes++;
    	}
    	

	}
}