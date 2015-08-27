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
		
		if(movimento == this.baixo) {
			
		} else if(movimento == this.cima) {
			
		} else if(movimento == this.direita) {
			
		} else if(movimento == this.esquerda) {
			
		}
	};
}
