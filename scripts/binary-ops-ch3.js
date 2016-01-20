

var display = funtion(){
	var x = $("#x").val();
	var y = $("#y").val();
	$("#xDisplay").html(x);
	$("#yDisplay").html(y);
}


$(document).ready(function(){

	$("button").on("click", display);
});