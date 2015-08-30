function iniciar() {
	$("#resultado").addClass("hide");
	var algoritmo = new Algoritmo();
	var resultado = algoritmo.calcular();
	if (resultado.achou == true) {
		$("#resultado").removeClass("hide");
		var html = "O caminho mais curto até o final do labirinto possui como movimentos " + resultado.individuo.sequencia + ":<ol>";
		
		for(var i = 0; i < resultado.individuo.sequencia.length; i=i+2){
			var mv = resultado.individuo.sequencia.substring(i, i+2);
			if (mv == "00") {
				html += "<li>Para baixo (" + mv + ")";
			} else if (mv == "01") {
				html += "<li>Para cima (" + mv + ")";
			} else if (mv == "10") {
				html += "<li>Para direita (" + mv + ")";
			} else if (mv == "11") {
				html += "<li>Para esquerda (" + mv + ")";
			}
			
		
		}
		
		html += "</ol>";
		$("#textoResultado").html(html);
	} else {
		$("#resultado").removeClass("hide");
	}
	
//	var ind = new Individuo();
//	ind.setar("0010000000001010");
//	console.dir(ind);
}