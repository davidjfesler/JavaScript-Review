var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function
var last = function(myArr) {
	alert(myArr[myArr.length - 1]);
};

last(threeItems);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

var looper = function(myArr) {
	for (var i = 0; i < myArr.length; i++) {
		if (myArr[i] % 2 !== 0) {
			myArr.splice(i, 1);
		}
	}
	return myArr;
};

looper(evenArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full of numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var looper = function(myArr, randNum) {
	for (var i = 0; i < myArr.length; i++) {
		if (myArr[i] === randNum) {
			return true;
		} else {
			return false;
		}
	}
};

looper(randomArray, getRandomArbitrary());


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

second = first.slice(0, first.length);
second.push(6, 7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best";

var longest = function(str) {
	var newStr = str.split(" ");
	var count = 0;
	var word = null;
	for (var i = 0; i < newStr.length; i++) {
		if (count < newStr[i].length) {
			count = newStr[i].length;
			word = newStr[i];
		}
	}
	return word;
};

longest(sentence);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

var capitalize = function(string) {
	var newStr = string.split(" ");

	for (var i = 0; i < newStr.length; i++) {
		newStr[i][0] = newStr[i][0].toUpperCase();
	}
	return newStr;
};

capitalize(myPoem);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

var vowelCounter = function(string) {
	var vowels = ["a", "e", "i", "o", "u", "y"];
	var newArr = [];
	for (var i = 0; i < vowels.length; i++) {
		for (var j = 0; j < string.length; j++) {
			if (vowels[i] === string.charAt(j)) {
				newArr.push(vowels[i]);
			}
		}
	}
	return newArr;
};

vowelCounter(theOdyssey);
