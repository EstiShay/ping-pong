//Business logic
function numToList(userInput) {
  numList = [];
  for (num = 1; (num <= userInput && num <= 90); num += 1) {
    if (num === 90){
      numList.push("BORED NOW COME BACK LATER");
    } else if (num % 15 === 0) {
      numList.push("ping-pong");
    } else if (num % 5 === 0) {
      numList.push("pong");
    } else if (num % 3   === 0) {
      numList.push("ping");
    } else {
      numList.push(num);
    }
  }
  return numList;
}


//UI logic
$(document).ready(function() {


  $("#play-button").click(function() {
    var userInput = $("input#cap-number").val();
    var ppList = numToList(userInput);

    $("ul").empty();
    ppList.forEach(function(num) {
      $("ul").append("<li>" + num + "</li>");
    });
    $("#result").show();
    event.preventDefault();
  });

  $("#reverseplay-button").click(function() {
    var userInput = $("input#cap-number").val();
    var ppList = numToList(userInput);
    ppList.reverse();

    $("ul").empty();
    ppList.forEach(function(num) {
      $("ul").append("<li>" + num + "</li>");
    });
    $("#result").show();
    event.preventDefault();
  });

    // $("#playing").hide();

});
