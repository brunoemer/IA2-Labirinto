function Populacao(tamanhoPopulacao, taxaMutaxao, taxaCrossOver, taxaElitismo) {
	this.tamanhoPopulacao = tamanhoPopulacao;
	this.taxaMutaxao = taxaMutaxao;
	this.taxaCrossOver = taxaCrossOver;
	this.taxaElitismo = taxaElitismo;
	this.individuos = [];
	
	this.gerarPopulacao = function() {
		for (var i = 0; i < tamanhoPopulacao; i++) {
			var individuo = new Individuo();
			individuo.gerar();
			this.individuos.push(individuo);
		}
	};

	this.ordenar = function() {
		this.individuos.sort(this.compare);
	}

	this.compare = function(a, b) {
	  if (a["fitness"] < b["fitness"])
	    return -1;
	  if (a["fitness"] > b["fitness"])
	    return 1;
	  return 0;
	}
}