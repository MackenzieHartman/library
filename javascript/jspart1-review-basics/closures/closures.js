// Closures
// essentially all functions in javascript are closures

function init(){
	var name = "StudentA";

	function displayName(){
		console.log(name);
	};
	displayName();
};
// console.log(name);

init();

// =======================================================================================

function sendRequest(){
	var apiKey = "1234"
	$.ajax({
		url : 'www.something.com' + apiKey,
		success : function(response){
			console.log("you did it!");

		}
	});
};
console.log(apiKey);
