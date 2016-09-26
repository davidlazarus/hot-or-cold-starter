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

var target = Math.floor((Math.random() * 100) + 1);
console.log("The secret number is: " + target);
var numberOfGuesses = 0;
var guesses = [];
var distance = null;
var previousDistance = null;


function getGuess() {
    $('.button').click(game);
    $('.inputvalue').keydown(function (enter) {
        if (enter.keyCode == 13) {
            game();
        }
    });
}


function game() {
    var guess = parseInt($('.inputvalue').val());
    if (guess !== null && $.isNumeric(guess) && (1 < guess < 101)) {
        $('.inputvalue').val('');
        numberOfGuesses += 1;
        myPush(guesses, guess);
        distance = Math.abs(target - guess);
        previousGuess = guesses[(guesses.length)-2];
        previousDistance = Math.abs(target - previousGuess);
        previousDistance = parseInt(previousDistance);
        console.log(guesses);
        console.log(previousGuess);

        $('.guessBox').html(guesses);
        $('#count').html(numberOfGuesses);


        if (guess === target) {
            $('h2#feedback').html('Congrats! You got it in ' + numberOfGuesses + ' attempts! The number was ' + target);
        }
        	else if (guess < 1 || 100 < guess){
			$('h2#feedback').html('Your guess must be a number between 1 and 100').css({color: 'red'});
        }
         	else {
            console.log(guess, target, previousDistance, distance);
            if (isNaN(previousDistance)) {
                if (guess > target) {
                    $('h2#feedback').html('Guess lower! Last guess: ' + guess);
                } else if (guess < target) {
                    $('h2#feedback').html('Guess higher! Last guess: ' + guess);
                }
            }
            	
            else if (distance > previousDistance) {
                if (guess > target) {
                   	$('h2#feedback').html('Getting colder, guess lower! Last guess: ' + guess);
                } else if (guess < target) {
                   	$('h2#feedback').html('Getting colder, guess higher! Last guess: ' + guess);
                }
            } 

            else if (distance < previousDistance) {
                if (guess > target) {
                   	$('h2#feedback').html('Getting hotter, guess lower! Last guess: ' + guess);
                } else if (guess < target) {
                   	$('h2#feedback').html('Getting hotter, guess higher! Last guess: ' + guess);
                }
           	} 
            	
            else if (distance === previousDistance) {
                if (guess > target) {
                    $('h2#feedback').html('On fire, guess lower! Last guess: ' + guess);
                } else if (guess < target) {
                    $('h2#feedback').html('On fire, guess higher! Last guess: ' + guess);
                }
            } 

            else {
                $('h2#feedback').html('ERROR: Your guess must be a number between 1 and 100').css({color: 'red'});
            }
        }
    }
  }


function myPush(array, val) {
  	array.push(val + ", ");
  	return array;
  }

function newGame(){
	$('	a.new').click(function(){
    	window.location.reload();
    	numberOfGuesses = 0;
        guesses = [];
        distance = null;
        previousDistance = null; 	
    });  
}

$(document).ready(function(){
	
	displayInformation();
  	hideInformation();
  	newGame();
  	getGuess();


});

