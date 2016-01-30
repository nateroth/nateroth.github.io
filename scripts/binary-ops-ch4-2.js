function display(){
	
	var table = $("table").get(0);
	table.innerHTML = "";
	var btnIndex = $("button").index(this);

	if(btnIndex == 0) {
		//we're in the AND button
		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "X";
		row.insertCell(-1).innerHTML = "Y";
		row.insertCell(-1).innerHTML = "X && Y";

		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "0";
		row.insertCell(-1).innerHTML = "0";
		row.insertCell(-1).innerHTML = "0";

		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "0";
		row.insertCell(-1).innerHTML = "1";
		row.insertCell(-1).innerHTML = "0";

		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "1";
		row.insertCell(-1).innerHTML = "0";
		row.insertCell(-1).innerHTML = "0";

		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "1";
		row.insertCell(-1).innerHTML = "1";
		row.insertCell(-1).innerHTML = "1";

		$("table").css({
            "background-color": "#777",
  			"color": "white",
 			"border-radius": "25px",
  			"text-align": "center",
		});
	}


			
		else if(btnIndex == 0) {
		//we're in the OR button
		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "X";
		row.insertCell(-1).innerHTML = "Y";
		row.insertCell(-1).innerHTML = "X && Y";

		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "0";
		row.insertCell(-1).innerHTML = "0";
		row.insertCell(-1).innerHTML = "0";

		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "0";
		row.insertCell(-1).innerHTML = "1";
		row.insertCell(-1).innerHTML = "0";

		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "1";
		row.insertCell(-1).innerHTML = "0";
		row.insertCell(-1).innerHTML = "0";

		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "1";
		row.insertCell(-1).innerHTML = "1";
		row.insertCell(-1).innerHTML = "1";

		$("table").css({
            "background-color": "#777",
  			"color": "white",
 			"border-radius": "25px",
  			"text-align": "center",
		});



	}

		else if(btnIndex == 0) {
		//we're in the NOT button
		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "X";
		row.insertCell(-1).innerHTML = "!X";

		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "0";
		row.insertCell(-1).innerHTML = "1";

		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "1";
		row.insertCell(-1).innerHTML = "0";

		$("table").css({
            "background-color": "#777",
  			"color": "white",
 			"border-radius": "25px",
  			"text-align": "center",
		});
	}


	else if(btnIndex == 0) {
		//we're in the XOR button
		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "X";
		row.insertCell(-1).innerHTML = "Y";
		row.insertCell(-1).innerHTML = "X && Y";

		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "0";
		row.insertCell(-1).innerHTML = "0";
		row.insertCell(-1).innerHTML = "0";

		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "0";
		row.insertCell(-1).innerHTML = "1";
		row.insertCell(-1).innerHTML = "0";

		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "1";
		row.insertCell(-1).innerHTML = "0";
		row.insertCell(-1).innerHTML = "0";

		var row = table.insertRow(-1);
		row.insertCell(-1).innerHTML = "1";
		row.insertCell(-1).innerHTML = "1";
		row.insertCell(-1).innerHTML = "1";

		$("table").css({
            "background-color": "#777",
  			"color": "white",
 			"border-radius": "25px",
  			"text-align": "center",
		});


}




$(document).ready(function(){

	$("#btn1").on("click", display)
	$("#btn2").on("click", display)
	$("#btn3").on("click", display)
	$("#btn4").on("click", display)
});
}