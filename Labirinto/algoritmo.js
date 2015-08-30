function Algoritmo() {
	this.achou = false;
	this.numeroMaximoInteracoes = 1000;
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
    			console.log(objetivo.individuo);
    			return {"achou" : true, "individuo" :objetivo.individuo};
    		}
    		if (this.interacoes > this.numeroMaximoInteracoes) {
    			return {"achou" : false};
    		}
    		this.interacoes++;
    	}
    	

	}
}