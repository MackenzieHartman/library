// iife = Immediately Invoked Function Expression
// Creates a function that immediately gets called upon opening: automatic startup

var userAuth = {
	password: 1234,
	name: "admin"
};
// If any logic preceeds my iife then i NEED to end the line above with a semi-colon
(function greeting(){
	console.log("Hey you guys!");
})();

// =======================================================================================

// Challenge: Create an iife that prints out the product of two numbers

var product ={
	num1: 3,
	num2: 4
};

(function product(){
	console.log( 3 * 4);
})();

// OR

(function product(num1, num2){
	console.log( num1 * num2);
})(3,4);

// =======================================================================================

