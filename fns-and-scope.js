//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name) {
	if (name === 'Tyler') {
		return true;
	} else {
		return false;
	}
};

var test = prompt('Type in your name: ', 'Philipp Schulte');

document.write('Input: ' + test + '<br>');
document.write('Output: ' + isTyler(test) + '<br>');
document.write('<hr>');


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function() {
	var name = prompt('Type in your name: ', 'Philipp Schulte');
	return name;
};

document.write('Your name is: ' + getName());
document.write('<hr>');


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function() {
	alert('Welcome ' + getName());
};


//Next problem



//What is the difference between arguments and parameters?

document.write('Question: ' + 'What is the difference between arguments and parameters?');
document.write('<br>');
document.write('Answer: ' + 'Arguments are the real values passed to and received by the function, '
						  + 'Parameters are the names listed in the function definition.');
document.write('<hr>');


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?

var arr = [false, 0, '', null, undefined, NaN];

//You can check it with a simple function just like that:
var logTruthiness = function(val) {
    if (val) {
        return 'Truthy';
    } else {
        return 'Falsy';
    }
};

for (var i = 0; i < arr.length; i++) {
	document.write((i + 1) + ': ' + arr[i] + ' ==> ' + logTruthiness(arr[i]) + '<br>');
}

document.write('<hr>');


//Next Problem



//Create a function called myName that returns your name

var myName = function() {
	return 'Philipp Schulte';
};

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

//Now alert the result of invoking newMyName

alert('Function definition: ' + newMyName);

document.write('Function definition: ' + newMyName);
document.write('<hr>');


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function() {
	return function() {
		return 'Philipp Schulte';
	}
};

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

document.write('outerFn: ' + outerFn);
document.write('<br>');
document.write('innerFn: ' + innerFn);
document.write('<br>');
document.write('Function invokation of: ' + 'innerFn()' + ' ==> ' + innerFn());