/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const BOARD_WIDTH = $("#board").width();
  const BOARD_HEIGHT = $("#board").height();
  
  // Game Item Objects
  var ball = makeGameItem("#ball");
  var leftPaddle = makeGameItem("#leftPaddle");
  var rightPaddle = makeGameItem("#rightPaddle");

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp); 
  
  

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

 function makeGameItem(id){
  var item = {};
  item.id = id;
  item.x = parseFloat($(id).css("left"));
  item.y = parseFloat($(id).css("top"));
  item.width = $(id).width();
  item.height = $(id).height();
  item.speedX = 0;
  item.speedY = 0;
  return item;
 }




  
  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  
  
  /* 
  Called in response to events.
  */
 
  const KEY = {
    W: 87,
    S: 83,
    UP: 38,
    DOWN: 40
  };

  function handleKeyDown(event) {
    if (event.which === KEY.W) {
      leftPaddle.speedY = -5;
    }
    if (event.which === KEY.S) {
      leftPaddle.speedY = 5;
    }
    if (event.which === KEY.UP) {
      rightPaddle.speedY = -5;
    }
    if (event.which === KEY.DOWN) {
      rightPaddle.speedY = 5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.W || event.which === KEY.S) {
      leftPaddle.speedY = 0;
    }
    if (event.which === KEY.UP || event.which === KEY.DOWN) {
      rightPaddle.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function moveObject(obj) {
    obj.x += obj.speedX;
    obj.y += obj.speedY;

    $(obj.id).css("left", obj.x);
    $(obj.id).css("top", obj.y);
  }

  function moveBall() {
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    $(ball.id).css("left", ball.x);
    $(ball.id).css("top", ball.y);
  }

  startBall();

  function startBall() {
    ball.x = BOARD_WIDTH / 2;
    ball.y = BOARD_HEIGHT / 2;

    ball.speedX = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    ball.speedY = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
  }

  

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
