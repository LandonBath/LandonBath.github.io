var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacles(x, y, hitSize, damage){
      var hitZoneSize = hitSize;// the size of hitbox for the obstacles and you
    var damageFromObstacle = damage;// how much damage it does
    var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);// creates the obstacles
    obstacleHitZone.x = x;// sets the x coordinates for the obstacles
    obstacleHitZone.y = y;// sets the y coordinates for the obstacles
    game.addGameItem(obstacleHitZone);// adds the obstacles to the game
    var obstacleImage = draw.bitmap("img/sawblade.png");// draws a obstacle bitmap and store it as obst
    obstacleHitZone.addChild(obstacleImage);
    obstacleImage.x = -25;
    obstacleImage.y = -25;
    }
    createObstacles( 400, groundY - 50, 25, 10);
    createObstacles( 400, groundY - 50, 25, 20);
    createObstacles( 400, groundY - 50, 25, 100);
    function startLevel() {
    
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
