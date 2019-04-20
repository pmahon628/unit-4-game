//game variables.
  var randomNumber = 0;
  var counter = 0;
  var crystalVals = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
  var lost;
  var win;
  


  $( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $('#randomNumber').text(Random);
  


//functions for crystal clicks - next is getting values assigned.

$(".crystal-image").on("click", function() {
  counter += 1;
  alert("You clicked this crystal " + counter + " times!");
});

$(".crystal2").on("click", function(){
  counter +=1;
  alert("You clicked this crystal " + counter + " times!");
});

$(".crystal3").on("click", function(){
  counter +=1;
  alert("You clicked this crystal " + counter + " times!");
});

$(".crystal4").on("click", function(){
  counter +=1;
  alert("You clicked this crystal " + counter + " times!");
});

//var link = document.getElementById('randomNumber');s
//link.onclick = getNumber;
//



//function getNumber() {
  //var randomNumber = Math.floor(Math.random() * 19) + 120); // la fonction magique
  //console.log('randomNumber');
  //$('randomNumber').html(randomNumber);
  //return false;
//get random generated to show up on screen. -- ? not sure how?