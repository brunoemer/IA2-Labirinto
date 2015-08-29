function Labirinto() {
	this.tamanho = 5;
	this.labirinto = [['00', '11'],
	                  ['10', '11'],
	                  ['00', '11'],
	                  ['00'],
	                  ['00'],
	                  ['00', '01'],
	                  ['00', '10'],
	                  ['11', '01'],
	                  ['01', '10'],
	                  ['00', '01', '11'],
	                  ['01', '10'],
	                  ['00', '01', '10', '11'],
	                  ['00', '10', '11'],
	                  ['00', '10', '11'],
	                  ['11', '01'],
	                  ['00', '10'],
	                  ['01', '11'],
	                  ['00', '01'],
	                  ['01', '10'],
	                  ['00', '11'],
	                  ['01', '10'],
	                  ['10', '11'],
	                  ['10', '11', '01'],
	                  ['10', '11'],
	                  ['01', '11']];
	this.posicao = 0;
	this.baixo = '00';
	this.cima = '01';
	this.direita = '10';
	this.esquerda = '11';
	
	/*
		Retorna:
		0 para valido
		-1 quando atravessar parede
		-2 quando sair do labirinto
	*/
	this.validaMovimento = function(posicao, movimento) {
		var valido = 0;

		if(posicao % this.tamanho == 0) { //coluna esquerda
			if(movimento == this.esquerda) {
				valido = 2;
			}
		} else if(posicao % this.tamanho == this.tamanho-1) { //coluna direita
			if(movimento == this.direita) {
				valido = 2;
			}
		} else if(parseInt(posicao / this.tamanho) == 0) { //linha 1
			if(movimento == this.cima) {
				valido = 2;
			}
		} else if(parseInt(posicao / this.tamanho) == this.tamanho-1) { //ultima linha
			if(movimento == this.baixo) {
				valido = 2;
			}
		}
		if(valido > 0) {
			return valido;
		}
		
		var pos = this.labirinto[posicao];
		if($.inArray(movimento, pos) == -1){
			valido = 1;
		}
		return valido;
	};
	
	this.calculaDistanciaFinal = function(ultimaPosicao) {
		var linha = this.tamanho - 1 - parseInt(ultimaPosicao / this.tamanho);
		var coluna = this.tamanho - 1 - (ultimaPosicao % this.tamanho);
		return linha + coluna;
	};
	
	this.move = function(movimento) {
		if(movimento == this.esquerda) {
			this.posicao -= 1;
		} else if(movimento == this.direita) {
			this.posicao += 1;
		} else if(movimento == this.cima) {
			this.posicao -= this.tamanho;
		} else if(movimento == this.baixo) {
			this.posicao += this.tamanho;
		}
		return this.posicao;
	};
	
	this.calcularFitness = function(movimentos) {
		var fitness = 0;
		var f;
		for(var i = 0; i < movimentos.length; i=i+2){
			var mv = movimentos.substring(i, i+2);
			var pos = this.move(mv);
			
			f = this.validaMovimento(pos, mv);
			fitness += f;
//			console.info(mv + " - " + pos + " - "+f	);
		}
		f = this.calculaDistanciaFinal(pos);
		fitness += f;
		if(f == 0) {
			return f;
		}

		return fitness;
	};
}

$(document).ready(function() {
//	var lab = new Labirinto();
//	lab.calcularFitness('1000100010001000');
	//lab.validaMovimento(10, '10');
	//lab.validaMovimento(4, '11');
	//lab.validaMovimento(2, '00');
	//lab.validaMovimento(21, '01');
});
