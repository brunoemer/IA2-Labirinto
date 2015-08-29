function Individuo() {
	this.fitness;
	this.sequencia;
	this.movimentosPossiveis = ["00", "01", "10", "11"];
	this.posicaoAtual = 0;
	this.lab = new Labirinto();
	
	this.calcularFitness = function() {
//		this.fitness = gerarRandomico(1000, 0);
//		return;
		
//		var movimentos = [];
//		movimentos.push(this.sequencia.substr(0,2));
//		movimentos.push(this.sequencia.substr(2,2));
//		movimentos.push(this.sequencia.substr(4,2));
//		movimentos.push(this.sequencia.substr(6,2));
//		
//		var lab = new Labirinto();
//		var valorFitness = 0;
//		for (var i = 0; i < 4; i++) {
//			valorFitness += lab.validaMovimento(this.posicaoAtual, movimentos[i]);
//		}
//		console.info(valorFitness);
//		this.fitness = valorFitness;
		
		this.fitness = this.lab.calcularFitness(this.sequencia);
		console.log(this.sequencia + " = " + this.fitness);
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
	
	this.setar = function(sequencia) {
		this.sequencia = sequencia;
		this.fitness = this.calcularFitness();
	}
}