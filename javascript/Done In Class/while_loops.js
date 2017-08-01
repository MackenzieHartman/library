//While loops will execute code for a determined set of iterations
//MUST BE CAREFUL!!  You can end up staring into the face of infinity...and lose!

//To control our looping - use a loop control varialbe
//While loops have three parts to the lcv
//Assign the starting case for the lcv
//Assign the ending case for lcv
//Then increment or decrement to the end case

function divider(){
  console.log("=========================");
}
var lcv = 0;
while (lcv < 10) {
  console.log("Kenny G!");
  lcv++
}
divider();
var i = 0 
while (i <= 10) {
    console.log(i);
    i += 2; //i = i + 2
}
divider();
var i = 10;
while (i >= 0) {
  console.log(i);
  i--
}
divider();
var cars = ["Elantra", "Lambo", "Tesla", "Porsche", "Civic", "Delorean"];
var i = 0;
while (i <= 5) {
  console.log(cars[i]);
  i++
}
divider();
var cars = ["Elantra", "Lambo", "Tesla", "Porsche", "Civic", "Delorean"];
//console.log(cars.length);
var i = 0;
while (i < cars.length) {
  console.log(cars[i]);
  i++;
}
divider();
i = 0;
while (true) {
  if ( i === 20) {
    break;
  }
  console.log(i);
  i++
}




// //An infinite loop
// divider();
// var i = 10;
// while (i >= 0) {
//   console.log(i);
//   i++
// }




