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
  
  // Game Item Objects, these are the things in our game
  var ball = makeGameItem("#ball");
  var leftPaddle = makeGameItem("#leftPaddle");
  var rightPaddle = makeGameItem("#rightPaddle");

  // Player scores start at 0
  var scorePlayer1 = 0;
  var scorePlayer2 = 0;

  // Update the score display
  $("#scorePlayer1").text(scorePlayer1);
  $("#scorePlayer2").text(scorePlayer2);

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp); 

  var MAX_SPEED = 15;
  
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Create a function that makes a game item object with the necessary properties
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
 
  // Handle keydown events for controlling the paddles
  const KEY = {
    W: 87,
    S: 83,
    UP: 38,
    DOWN: 40
  };

  // Update paddle speeds based on key presses
  function handleKeyDown(event) {
    if (event.which === KEY.W) {
      leftPaddle.speedY = -8;
    } else if (event.which === KEY.S) {
      leftPaddle.speedY = 8;
    } else if (event.which === KEY.UP) {
      rightPaddle.speedY = -8;
    } else if (event.which === KEY.DOWN) {
      rightPaddle.speedY = 8;
    }
  }

  // Stop paddle movement when keys are released
  function handleKeyUp(event) {
    if (event.which === KEY.W || event.which === KEY.S) {
      leftPaddle.speedY = 0;
    } else if (event.which === KEY.UP || event.which === KEY.DOWN) {
      rightPaddle.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Handle collisions with walls and scoring
  function wallCollision(obj){
    if (obj.id !== "#ball") {
      if (obj.y <= 0) {
        obj.y = 0;
        obj.speedY = 0;
      }
      // Prevent paddles from going below the bottom of the board
      if (obj.y + obj.height >= BOARD_HEIGHT) {
        obj.y = BOARD_HEIGHT - obj.height;
        obj.speedY = 0;
      }
    }

    // Handle ball collisions with the top and bottom walls, and scoring when it goes past the left or right edges
    if (obj.id === "#ball") {
      if (obj.y <= 0 || obj.y + obj.height >= BOARD_HEIGHT) {
        obj.speedY *= -1;
      }
      // Check if the ball goes past the left edge player 2 scores
      if (obj.x <= 0) {
        scorePlayer2++;
        $("#scorePlayer2").text(scorePlayer2);
        startBall();
        if (scorePlayer2 >= 11) {
          alert("Player 2 wins!");
          endGame();
        }
      }
      // Check if the ball goes past the right edge player 1 scores
      if (obj.x + obj.width >= BOARD_WIDTH) {
        scorePlayer1++;
        $("#scorePlayer1").text(scorePlayer1);
        startBall();
        if (scorePlayer1 >= 11) {
          alert("Player 1 wins!");
          endGame();
        }
      }
    }
  }

  // Check for collision between two game items
  function doCollide(a, b){
    return !(
      a.x > b.x + b.width ||
      a.x + a.width < b.x ||
      a.y > b.y + b.height ||
      a.y + a.height < b.y
    );
  }

  // Move a game item based on its speed and update its position on the screen
  function moveObject(obj) {
    obj.x += obj.speedX;
    obj.y += obj.speedY;

    $(obj.id).css("left", obj.x);
    $(obj.id).css("top", obj.y);
  }

  
  // Reset the ball to the center of the board and give it a random speed and direction
  function startBall() {
    ball.x = BOARD_WIDTH / 2 - ball.width / 2;
    ball.y = BOARD_HEIGHT / 2 - ball.height / 2;

    ball.speedX = (Math.random() * 3 + 3) * (Math.random() > 0.5 ? -1 : 1);
    ball.speedY = (Math.random() * 3 + 3) * (Math.random() > 0.5 ? -1 : 1);
  }
  startBall();

// Update the game state and redraw everything for the new frame
  function newFrame(){
    // Object movment every frame
    moveObject(ball);
    moveObject(leftPaddle);
    moveObject(rightPaddle);
    // Collision for ball and paddles
    wallCollision(ball);
    wallCollision(leftPaddle);
    wallCollision(rightPaddle);
    // Check for collisions between the ball and the paddles
    if (doCollide(ball, leftPaddle) || doCollide(ball, rightPaddle)) {
      ball.speedX = -ball.speedX;

      ball.speedX *= 1.12;
      ball.speedY *= 1.12;

          // limit speed
      if (Math.abs(ball.speedX) > MAX_SPEED) {
        ball.speedX = MAX_SPEED * Math.sign(ball.speedX);
      }
      if (Math.abs(ball.speedY) > MAX_SPEED) {
        ball.speedY = MAX_SPEED * Math.sign(ball.speedY);
      }
    }
  }

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
