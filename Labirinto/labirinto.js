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
	
	/*
		Retorna:
		0 para valido
		1 quando atravessar parede
		2 quando sair do labirinto
	*/
	this.validaMovimento = function(posicao, movimento) {
		var valido = 0;

		if(posicao % this.tamanho == 0) { //coluna esquerda
			console.info(3);
			if(movimento == this.esquerda) {
				valido = 2;
			}
		} else if(posicao % this.tamanho == this.tamanho-1) { //coluna direita
			console.info(4);
			if(movimento == this.direita) {
				valido = 2;
			}
		} else if(parseInt(posicao / this.tamanho) == 0) { //linha 1
			console.info(1);
			if(movimento == this.cima) {
				valido = 2;
			}
		} else if(parseInt(posicao / this.tamanho) == this.tamanho-1) { //ultima linha
			console.info(2);
			if(movimento == this.baixo) {
				valido = 2;
			}
		}
		if(valido > 0) {
			//console.info(posicao+" - "+movimento+" - "+valido);
			return valido;
		}
		
		var pos = this.labirinto[posicao];
		if($.inArray(movimento, pos) == -1){
			valido = 1;
		}
		
		//console.info(posicao+" - "+movimento+" - "+valido);
		
		return valido;
		
	};
}

$(document).ready(function() {
	var lab = new Labirinto();
	//lab.validaMovimento(10, '10');
	//lab.validaMovimento(4, '11');
	//lab.validaMovimento(2, '00');
	//lab.validaMovimento(21, '01');
});
