// boolean = true/false values or expressions
// var meaning to delare or define sets "tool" to meaning "true"
var bool = true				
console.log(bool); 

// ----------------------------------------------------------------------------------

// number
var num = 4;

// ----------------------------------------------------------------------------------

// string: does not matter whether you use single vs double ""
var firstName = "Mackenzie";
var lastName = 'Hartman';

// ----------------------------------------------------------------------------------

// Object key value pair
// name:key "Nick":parameter or value
var person = {
	name: "Nick",   
	age: 44
}
//          object  key
console.log(person.name + person.age)

// ----------------------------------------------------------------------------------
// printing out not manupulating
// functions
function greeting(){
	var name = "Kenn"
	var sentence = name + ", how are you doing today?"
	console.log(sentence);
}

greeting();

// ----------------------------------------------------------------------------------

// manipluating the data giving us a result
// 			 num1, num 2 are the parameters
function add(num1, num2){
	var sum = num1 + num2;
	return sum;
}				
console.log(add(2,4));		// (2,4) are the arguments being pased in

// Create a function that accepts 1 parameter for nae then return a string that uses that parameter 
//     ex: "<name> It's great to meet you."

function niceThingToSay(name){
	return name + ", it's great to meet you!";
}
console.log(niceThingToSay("Jeremiah"));

// ----------------------------------------------------------------------------------

// objects with function/methods

/*var person = {
	name: "Nick",
	age:  44
}
*/

// obect.operator> creating a new key inside the object > have to make a (getName)
// 'this' refers to the object within
person.getName= function(){
//         this => the object it's within
//		   person.name
	return this.name;
};
console.log(person.getName());

// ----------------------------------------------------------------------------------

