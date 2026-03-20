/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  var ball = createGameItem("#ball", 5, 5);
  var leftPaddle = createGameItem("#leftPaddle", 0, 0);
  var rightPaddle = createGameItem("#rightPaddle", 0, 0);

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleEvent);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function createGameItem(id, speedX, speedY) {
    var item = {};
    item.id = id;
    item.x = parseFloat($(id).css("left"));
    item.y = parseFloat($(id).css("top"));
    item.width = $(id).width();
    item.height = $(id).height();
    item.speedX = speedX;
    item.speedY = speedY;
    return item;
  }


  
  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    moveBall();

  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function moveBall() {
    // update the position of the ball according to its speed
    ball.x += ball.speedX;
    ball.y += ball.speedY;

    // move the HTML element with CSS left and top properties
    $(ball.id).css("left", ball.x);
    $(ball.id).css("top", ball.y);

    
    // check for collision with the walls and reverse direction if necessary
      if (ball.y <= 0 || ball.y + ball.height >= $(window).height()) {
        ball.speedY = -ball.speedY;
      }
      if (ball.x <= 0 || ball.x + ball.width >= $(window).width()) {
        ball.speedX = -ball.speedX;
      }

      
  }

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
