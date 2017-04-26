$(document).ready(function () {

		var boom = "BOOM ";
		var crash = "CRASH ";
		var whizz = "WHIZZ ";
		var bang = "BANG ";
	
	var boombox = setInterval (function() {
	 	$(".box-boom").append(boom + '<br />');
	}, 1000)
	
	var crashbox = setInterval (function() {
		$(".box-crash").append(crash);
	}, 100 )
	
	var whizzbox = setInterval (function() {
		$(".box-whizz").append(whizz + '<br />');
	}, 400);
	
	var bangbox = setInterval (function() {
		$(".box-bang").append(bang + '<br />');
	}, 800);
	
		$(".button-stop").click(function(){
			clearInterval(boombox);
			clearInterval(crashbox);
			clearInterval(whizzbox);
			clearInterval(bangbox);
		});
});