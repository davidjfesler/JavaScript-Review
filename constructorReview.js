//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

var animals = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
};

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

var persons = function(name, age, height, gender) {
  var obj = {
    name: name,
    age: age,
    height: height,
    gender: gender
  }
  return obj;
};


//Create a animal array and a person array.

var animal = [];
var person = [];

//Create two instances of Animal and push those into your animal array

var snake = new animals("Slytherin", "Snake", "Nil", "Varies", ["Rodents", "Muffins", "Bacon"]);
var dog = new animals("Dogimus", "Rocky", "4", "Varies", ["KibbelsNBits", "Food Scraps", "Not Cheese"]);
animal.push(snake, dog);


//Create two instances of person and push those into your person array.

var tim = persons("Tim", "22", "2'4", "M");
var ted = persons("Ted", "23", "4'2", "F");

person.push(tim, ted);


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

animals.prototype.eat = function() {
  var chow = this.food[Math.floor(Math.random() * this.food.length - 1)];
  alert(name + ' ate ' + chow);
};


//At this point, if we wanted to add something to every istance of person could we? 

//No, because each new person is a new object, meaning they do not have access to the method we would create. On the flip side, each animal has access through the new keyword understanding that it calls upon the original constructor, and has access to its scope.



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
    it understands that you are referencing the constructor, allowing it to set itself up in the exact way as previous constructor objects, allowing them to have access to new prototypes.
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/