// jQuery() or $() >> jQuery function > Grab > something >
// document is all of the file in which the script is within. <script type="text/javascript" src="main.js"></script> 
// one the document finishes loading, do this code. Once this guy is done, run this callback function inside of the ready method <empty ()>
// document will return an object
$(document).ready(function(){                
	 var $h1= $("#one");
	 $h1.addClass("red");

	 $h1.addClass("group");

	 // .ajax() is a method/function
	 // $.ajax({
	 // 	type: "GET",
	 // 	url:"http://rest.learncode.academy/api/learncode/friends"	 
	 // }).done(function(data){	
	 		
	 // 		$.each(data, function(i,d){
	 // 			console.log(d);
	 // 			// console.log(key + " : " + value);
	 // 		})


	 // 		// data=parameter
	 // 		console.log(data);
	 // })
	 		$.ajax({
			type: 'GET',
			url: 'http://api.openweathermap.org/data/2.5/weather?zip='+ 46064 +',us&apikey='+ "6ad193286898066321d6f495b583dcea"
		}).done(function(weather){
			console.log(weather)
		}).fail(function(){
			console.log("awe man this doesn't work")
		})

});

// plain old javascript
var h1 = document.getElementById("#one")




function times(num1, num2){
    return(num1 * num2);
}
console.log(times(23,45));
