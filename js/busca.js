(function() {	
	$("#busca").on("input", function () {
		//guarda o valor digitado,removendoespaços extras.
		var busca = $(this).val().trim();
		if(busca.length) {
			$(".cartao").hide().filter(function() {
				return $(this).find(".cartao-conteudo")
							  .text()
							  .match(new RegExp(busca, "i"));
			}).show();
		} else {
			$(".cartao").show();
		}
	});
})();