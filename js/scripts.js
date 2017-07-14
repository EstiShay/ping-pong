//Business logic
function numToList(userInput) {
  numList = [];
  for (i = 1; (i <= userInput && i <= 90); i += 1) {
    if (i % 15 === 0) {
      numList.push("ping-pong");
    } else if (i % 5 === 0) {
      numList.push("pong");
    } else if (i % 3   === 0) {
      numList.push("ping");
    } else {
      numList.push(i);
    }
  }
  return numList;

}


//UI logic
$(document).ready(function() {

  $("#playing").submit(function(event) {
    var input = $("input#cap-number").val();
    var output = numToList(input);

    output.forEach(function(num) {
      $("ul").append("<li>" + num + "</li>");
    });

    $("#result").show();
    $("#playing").hide();
    event.preventDefault();
  });
});
