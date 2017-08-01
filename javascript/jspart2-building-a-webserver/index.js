																// Building a webserver for application: express.js.com / ex: server.js
var express = require('express');					    		// grabbing express framwork and putting it inside the project (building box)
var app = express();								   			// setting express to keyword app: renamed express
var http = require ('http').Server(app);			    		// passing in expree app to the server
 					// key name in JS
app.use(express.static(__dirname + '/public'));					//app: referring to express: function call> sends the static from public folders to...
																
app.get('/', function(req, res){								// http verb: express gets this infor from the url: http://google.com/  | <http>(protocol) <google.com>(location) </>(path)																
	res.sendFile(__dirname + '/index.html');					// respond sends the file back to get response from 'index.html' where the file lives
})								

http.listen(3000, function(){									// opens the port to listen on port 3000 | an event is waiting for this port to open.
	console.log('listening on port 3000');						
}) 


/*
   Challenge:
	   Create a html file for a contact page in the root folder.
	   Create h1 tag with the words contact form.
	   Then in your index.js, include a route that serves up that file.
*/

app.get('/contact', function(req, res){																								
	res.sendFile(__dirname + '/contact.html');					
})

http.listen(3000, function(){									
	console.log('listening on port 3000');						
}) 
