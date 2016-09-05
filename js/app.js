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
  	var guestList = [];
	$('.button').click(function(){
		var guess = $('.inputvalue').val();
		var diff = Math.abs(target - guess);
    	myPush(guestList, guess);
    
    
    	$('.guessBox').html(guestList);
   
  		$('#count').html(function(i, val) { return +val+1 });
		
			if (diff>=50) {
			$('h2#feedback').html('Cold AF!');
		}

			else if ((30<=diff) && (diff<=49)) {
			$('h2#feedback').html('Coldish');
		}

			else if ((10<=diff) && (diff<=29)) {
			$('h2#feedback').html('Warm');
		}
		
			else if ((5<=diff) && (diff<=9)) {
			$('h2#feedback').html('Hawt!');
		}

			else if ((1<=diff) && (diff<=4)) {
			$('h2#feedback').html('Boiling!');
		}

			else {
			$('h2#feedback').html('Nailed It!');
		}
	});
}

function myPush(array, val) {
  array.push(val + ", ");
  return array;
}

$(document).ready(function(){
	
	  displayInformation();
  	hideInformation();
  	newGame();
  	goFind();


});

