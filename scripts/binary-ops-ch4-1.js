function computeAnd(){
	var x = Number($("#inputX").val());
	var y = Number($("#inputY").val());

	$("#output").html(Boolean(x&&y));
}



	$(document).ready(function(){

	$("#btn1").on("click", computeAnd)
});

	function computeAnd(){
	var x = Number($("#inputX").val());
	var y = Number($("#inputY").val());

	$("#output").html(Boolean(x||y));
}



	$(document).ready(function(){

	$("#btn2").on("click", computeAnd)
	
});

	function computeAnd(){
	var x = Number($("#inputX").val());
	var y = Number($("#inputY").val());

	$("#output").html(Boolean(!x));
}



	$(document).ready(function(){

	$("#btn3").on("click", computeAnd)
});

	function computeAnd(){
	var x = Number($("#inputX").val());
	var y = Number($("#inputY").val());

	$("#output").html(Boolean(X &oplus; Y));
}



	$(document).ready(function(){

	$("#btn4").on("click", computeAnd)
});
