
//1. Define the onclick handler
var display =funtion () {
	var gallon = $("#gallon").val();
	$("#quantityDisplay").html(gallon);
};

//2-3. Grab the button & register the handler
$("button").on("click", display);