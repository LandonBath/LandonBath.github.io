$(document).ready(function () {
    // Your code goes here
    $("<div>").css({
      height: 15,
      width: 15,
      backgroundColor: "black",
      position: "absolute",
      top: 50,
      left: 50,
      
    })
    .appendTo("#die")

      function makeDot(top, left, elementToAppendTo) {
        $("<div>").css({
          height: 15,
          width: 15,
          backgroundColor: "black",
          position: "absolute",
          top: top,           
          left: left,          
        })
        .appendTo(elementToAppendTo); 
      }

    function rollDie(dieID) {
      $(dieID).empty();
      var randomNum = Math.ceil(Math.random() * 6);
      console.log(randomNum);
      if (randomNum === 1) {
        makeDot(42, 42, dieID); // middle middle
      } else if (randomNum === 2) {
        makeDot(10, 10, dieID); // top left
        makeDot(75, 75, dieID); // bottom right
      } else if (randomNum === 3) {
        makeDot(10, 10, dieID); // top left
        makeDot(75, 75, dieID); // bottom right
        makeDot(42, 42, dieID); // middle middle
      } else if (randomNum === 4) {
        makeDot(75, 75, dieID); // bottom right
        makeDot(10, 10, dieID); // top left
        makeDot(10, 75, dieID); // top right
        makeDot(75, 10, dieID); // bottom left
      } else if (randomNum === 5) {
        makeDot(42, 42, dieID); // middle middle
        makeDot(75, 75, dieID); // bottom right
        makeDot(10, 10, dieID); // top left
        makeDot(75, 10, dieID); // bottom left
        makeDot(10, 75, dieID); // top right
      } else if (randomNum === 6) {
        makeDot (10, 10, dieID); // top left
        makeDot (42, 10, dieID); // middle left
        makeDot (75, 10, dieID); // bottom left
        makeDot (10, 75, dieID); // top right
        makeDot (42, 75, dieID); // middle right
        makeDot (75, 75, dieID); // bottom right
      }
    }

        function makeDot(top, left, dieID) {
          var dot = $("<div></div>");
          dot.css({
            "position": "absolute",
            "top": top + "px",
            "left": left + "px",
            "width": "15px",  
            "height": "15px", 
            "background-color": "black",
            "border-radius": "50%" 
          });
        $(dieID).append(dot);
      }

    function handleClick() {
      rollDie("#die");
    }

    $("#die").on("click", handleClick);
});
