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
	this.baixo = '00';
	this.cima = '01';
	this.direita = '10';
	this.esquerda = '11';
	
	this.validaMovimento = function(posicao, movimento) {
		var valido = 0;
		
		console.info(posicao+" - "+movimento+" - "+parseInt(posicao / this.tamanho));
		
		if(parseInt(posicao / this.tamanho) == 0) { //linha 1
			if(movimento == this.cima) {
				valido = 2;
			}
		} else if(parseInt(posicao / this.tamanho) == this.tamanho-1) { //ultima linha
			if(movimento == this.baixo) {
				valido = 2;
			}
		} else if(posicao % this.tamanho == 0) { //coluna esquerda
			if(movimento == this.esquerda) {
				valido = 2;
			}
		} else if(posicao % this.tamanho == this.tamanho-1) { //coluna direita
			if(movimento == this.direita) {
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
}
