function Individuo() {
	this.fitness;
	this.sequencia;
	this.movimentosPossiveis = ["00", "01", "10", "11"];
	this.posicaoAtual = 0;
	
	this.calcularFitness = function() {
		return gerarRandomico(1000, 0);
	};
	
	this.mutacao = function() {
		var pontoMutacao = gerarRandomico((this.sequencia.length - 1), 0);
		this.sequencia = this.sequencia.substr(0, pontoMutacao -1) + gerarRandomico(1, 0) + this.sequencia.substr(pontoMutacao);
		this.calcularFitness();
	};

	this.gerar = function() {
		this.sequencia = "";
		for (var i = 0; i < 8; i++) {
			this.sequencia = this.sequencia + this.movimentosPossiveis[gerarRandomico(4, 0)];
		};
		this.fitness = this.calcularFitness();
	}
}