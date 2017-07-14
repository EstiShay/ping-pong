//Business logic
function numToList(userInput) {
  numList = [];
  for (i = 1; i <= userInput; i += 1) {
    numList.push(i);
  }
  return numList;

}






//User Interface
$(document).ready(function(){
  
  $("#playing").submit(function(event){
    var input = $("input#cap-number").val();
    var output = numToList(input);

    output.forEach(function(num){
      $("ul").append("<li>" + num + "</li>");
    });

    $("#result").show();
    event.preventDefault();
  });
});
