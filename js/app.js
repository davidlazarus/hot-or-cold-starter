/*--- Display information modal box ---*/
function displayInformation(){
	$(".what").click(function(){
 		$(".overlay").fadeIn(1000);    
  	});
}

/*--- Hide information modal box ---*/
function hideInformation(){
	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
}

var target = randomInt(1,100);
function randomInt(min,max)
	{return Math.floor(Math.random()*(max-min+1)+min);}
console.log("this is the target");
console.log(target); 


function newGame(){
	$('	a.new').click(function(){
    	window.location.reload();  	
    });  
}

function goFind(){
	$('.button').click(function(){
		var guess = $('.inputvalue').val();
		var diff = Math.abs(target - guess);
		
			if (diff>=50) {
			$('h2#feedback').html('COLD AF!');
		}

			else if ((30<=diff) && (diff<=49)) {
			$('h2#feedback').html('Coldish');
		}

			else if ((10<=diff) && (diff<=29)) {
			$('h2#feedback').html('warm');
		}
		
			else if ((1<=diff) && (diff<=9)) {
			$('h2#feedback').html('HAWT!');
		}

			else {
			$('h2#feedback').html('NAILED IT!');
		}
	});
}



$(document).ready(function(){
	
	displayInformation();
  	hideInformation();
  	newGame();
  	goFind();


});

