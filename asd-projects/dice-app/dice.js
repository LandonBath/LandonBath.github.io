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
    
      // Function to create a dot at a specific position on the die
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

     // Function to roll the die and display the appropriate number of dots
      function rollDie(dieID) {
        $(dieID).empty();
        var randomNum = Math.ceil(Math.random() * 6);
        console.log(randomNum);
        if (randomNum === 1) {
          makeDot(42, 42, dieID); // middle 
        } else if (randomNum === 2) {
          makeDot(10, 10, dieID); // top left
          makeDot(75, 75, dieID); // bottom right
        } else if (randomNum === 3) {
          makeDot(10, 10, dieID); // top left
          makeDot(75, 75, dieID); // bottom right
          makeDot(42, 42, dieID); // middle 
        } else if (randomNum === 4) {
          makeDot(75, 75, dieID); // bottom right
          makeDot(10, 10, dieID); // top left
          makeDot(10, 75, dieID); // top right
          makeDot(75, 10, dieID); // bottom left
        } else if (randomNum === 5) {
          makeDot(42, 42, dieID); // middle 
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

        // Function to create a dot at a specific position on the die
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
    
      // Event handler for clicking the die
      function handleClick() {
        rollDie("#die");
        
      }

      // Attach the click event handler to the die
      $("#die").on("click", handleClick);

      // Event handler for clicking the die2
      function handleClick() {
        rollDie("#die2");
      }

      // Attach the click event handler to the die2
      $("#die2").on("click", handleClick);

    
});
