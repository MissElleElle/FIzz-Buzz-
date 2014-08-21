$(document).ready(function () {

//Initialize variables
var counter;
	
//for and if else loop for counter
	for (counter = 1; counter <=100; counter++) { 	/*starts at 1, stops at 100, increments by 1*/
		if (counter %5==0 && counter %3==0) {		/*if multiple of 5 and 3, print fizzbuzz*/
			console.log ("fizzbuzz and counter is: ", counter);
			$("#numbers").append("FizzBuzz, ");
		} else if (counter %5==0) {					/*if multiple of 5, print buzz*/
			console.log("buzz and counter is: ", counter);
			$("#numbers").append("Buzz, ");
		} else if(counter %3==0) { 					/*if multiple of 3, print fizz*/
			console.log("fizz and counter is: ", counter);
		    $("#numbers").append("Fizz, ");
		}else {
			console.log ("not: ", counter);			/*else if neither, print number*/
			$("#numbers").append(counter + " , ");
			}
		}
});

