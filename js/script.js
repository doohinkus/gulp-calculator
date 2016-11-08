//Buisness Interface Logic
  var userInput = parseInt($("input#userInput").val());
  var arr = [];
  var total = 0;
  var result = pingPong(userInput);
    //for loop
    for (var i = 1; i <= total; i++) {
      total += userInput;
      //conditional statements
      if ((i % 3 === 0 && i % 5 === 0)) { //if index is divisible by 3 OR 5
        arr.push("**PING-PONG**"); //add message to the end
      }
      else if (i % 3 === 0) { //if index is divisible by 3
        arr.push("**PING**");
      }
      else if (i % 5 === 0) { //if index is divisible by 5
        arr.push("**PONG**");
      }
      else if (i % 18 === 0) { //if index is divisible by 18
        arr.push("**PEPPERCORN PING-PONG**PEPPERCORN PING-PONG**");
      }
      else {
        arr.push(i); //final result
      }
  }

  //User Interface Logic
  $(document).ready(function() {
    $("form#pingPong").submit(function(event) {
      event.preventDefault();
      $("div#result").show();
      $("userInput"); 
      $("ul#result-list").append("<li>" + total + "</li>");
    });
  });

function pingPong(number) {
  var divs = [18,15,5,3];
  var outputs = ['peppercorn ping-pong', 'ping-pong', 'pong', 'ping']; 
 
  for (var i = 1; i <= total; i++) {
    if(number % divs[i] === 0) {
      return outputs[i]; 
    }
  }
  
  //If not divisible return:
  
  pingpong(90);
  pingpong(45);
  pingpong(10);
  pingpong(6);
