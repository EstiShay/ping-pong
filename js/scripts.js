//Business logic
// function numToList(userInput) {
//
//     return output;
// }






//User Interface
$(document).ready(function(){
  $("#playing").submit(function(event){
    var input = $("input#cap-number").val();
    // var output = numToList(input);
    $("ol").append(input);
    $("#result").show();
    event.preventDefault();
  });
});
