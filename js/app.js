$(document).ready(function(){

	var counterValue = $("#counter").text();


	$("#increment").click(function(){
		var value = $("#counter").text();
		$("#counter").text(++value);
	});

	$("#decrement").click(function(){
		var value = $("#counter").text();
		$("#counter").text(--value);
	});

	setInterval(function(){
		var randomValue = Math.random();

		if(randomValue > 0.5){
			randomValue = 1;
		} else {
			randomValue = 0;
		}	


		switch(randomValue){
			case 0:
				$("#counter").text(--counterValue);
				$("#counter").css('color', 'red');
				break;
			case 1:
				$("#counter").text(++counterValue);
				$("#counter").css('color', 'green');
				break;
		}

		
	}, 1000);




});


