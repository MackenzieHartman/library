What is angular JS? >> A front end frame work.
 
MCV style JavaScript framework for creating single page apps.
Write our code in the way angular JS wants us to, so we can use it’s features in our projects.
	
Features
•	2 way data binding (like magic)
•	Templates
•	DOM interaction (Document Object Model)
•	Filters (change how data is output to a user)
•	Directives (extends the functionality of html and adds a new behavior to it
•	Many more…
 
Single Page Apps
Angular JS primarily used to make single page, data-driven applications.
Additional content brought into the web page without the need to be refreshed.
Use ‘views’ (the V in MVC) to achieve this.
 
Angular JS primarily used to make single page, data driven applications


<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>
<!-- When a user types /contact, dynamically inject the contact.html view(fd) into this tag -->
<!-- When a user types /contact, dynamically inject the about.html view into this tag →
		<!-- We are not actually physically loading a new page, Angular JS is just   reaching out, grabbing the         
		       content of views that we need, bringing them back, and punching them right into the view area within 
		       the body.
<main ng-view> 
	
</body>
</html>	


What we’ll Learn…	
•	MVC (or MVW) overview
•	2-Way data binding
•	Filters, directives and expressions
•	Controllers and how to use them
•	Views and routing
•	Animations
•	Form validation
•	Create -a to-do-list application

What you need to know
•	JavaScript (essential)
•	HTML (essential)
•	CSS (optional)
•	JSON (optional)	


MCV Architecture
	Model
		Think of the model as data
		JSON, database data, etc.
	Control
		Control the functionality of our views
		Performs the interaction between our models and our views
		Different controllers for different areas in our application
	
View
		Used to display content & data to a user in a browser
		HTML
		Use expressions to insert data into views
			<html tag> {{data}} </html>



Example of using MVC
	User clicks a ‘show users’ button in a view.
	The ‘User Controller’ recognizes the button click event and performs a function.
	The function communicates with the ‘users’ model and retrieves all the user data.
	The controller passes accessibility to this data to the view, which then displays it to the end user via expressions.

MVW
•	-MVC= Model, View, Controller
•	-MVW= Model, View, Whatever
		UNDERLYING PRINCIPLE is separation of concerns


Angular JS

2-Way Data Binding



Directives
	Ex: ng app | ng-model 
	Directing angular to do something for us
	To perform some behavior to help us out
Expressions
	


 <script>
        var app = angular.module('app', []);
        app.controller('myController', function($scope) {
            $scope.FullName = "Change Full Name here";
            $scope.Address = "Change Address here";
        });
    </script>


    <div ng-app="app" ng-controller="myController">
        <p>Change values of textbox</p>
        <p>
            Full Name: <input type="text" ng-model="FullName" /> <br /> <br />
            Address: <input type="Text" ng-model="Address" />
        </p>
        <hr />
        <p>
        Full Name: <span style="background-color:yellow;">{{FullName}}</span><br/>
        Address: <span style="background-color:yellow;" ng-bind="Address"></span>
        </p>
    </div>



NET NINJA

jQuery Workout
MODULE  1:

Think of the Server and Client as two different projects in the same application
	Client is the front end side with ajax logic including:  index.html
	Server is a separate API project for back end side of app
package.json
	package.json (essential to the project, very important and crucial file, very handy when cloning a project)
	Contains the script, author, dependencies
	npm init brought up package.json (very important file)
	npm install: installs all dependencies / package says bring all of the in and load them up in node modules
	Node modules:  light weight module for running your local host (lightweight)
.gitignore
	Anything in the .gitingore will not be pushed to github and will not go into your commit.
bower.json
	Very similar to package.json. You may use bower to install things. It’s a node package so you have to use node to install it but it is its own package manager to bring in jQuery and Bootstrap to the project.
	Bower init
	Bower bootstrap//save…
	Same with jQeuery
MODULE 2: SERVER SETUP

	Ran npm init to get package.json which will determine our dependencies such as:
		bodyparser
		express
pg (postgres)	<could use for key value paired stuff>
pg-hstore (postgres) <could use for key value paired stuff>
sequelize: to communicate with postgres to help us more easily ping the database

.gitignore
	Anything in the .gitingore will not be pushed to github and will not go into your commit.
	Put node_modules in this folder therefor it won’t install into the hub

app.js
app.js is a simple amount of code but has very complex things going on within. 
Node: that key word of require that brings in a certain package into this file; Stores it in the variable express
Express is huge: one of the most npm packages
	var express = require(‘express’);
	var app = express();    its going to be an instance of express and this express function fires and everything that fires from this big ole package gets stored in this app variable

PORT3000
App.listen : in the development phase we are listening on port 3000:  .listen is the method that binds a certain port (STANDAR CONDITIONAL PORT)
Run node app.js and it will fire up saying “Listening on app 3000”

Express

	How to install express:
		npm init | npm install express --save | npm install express
	Routing: helping us define endpoints within a server
		EX: GET, POST

The following examples illustrate defining simple routes.

Respond with Hello World! on the homepage:

app.get('/', function (req, res) {
  res.send('Hello World!')
})
Respond to POST request on the root route (/), the application’s home page:

app.post('/', function (req, res) {
  res.send('Got a POST request')
})
Respond to a PUT request to the /user route:

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
Respond to a DELETE request to the /user route:

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
	
ROUTING refers to the definition of applicationend points (URls) and how they respond to client requests.
	EX: of a basic route.