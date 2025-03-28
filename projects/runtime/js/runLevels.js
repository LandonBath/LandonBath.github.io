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
    function createObstacles(x, y, hitSize, damage, image, rotation){
      var hitZoneSize = hitSize;// the size of hitbox for the obstacles and you
      var damageFromObstacle = damage;// how much damage it does
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);// creates the obstacles
      obstacleHitZone.x = x;// sets the x coordinates for the obstacles
      obstacleHitZone.y = y;// sets the y coordinates for the obstacles
      game.addGameItem(obstacleHitZone);// adds the obstacles to the game
      var obstacleImage = draw.bitmap(image);// draws a obstacle bitmap and store it as obstacles
      obstacleHitZone.addChild(obstacleImage);// attach the image to the obstacle hitzone
      obstacleImage.x = -25;// position the image on the hitzone's x value by moving it left 25 pixel
      obstacleImage.y = -25;// position the image on the hitzone's y value by moving it up 25 pixel
      obstacleHitZone.rotationalVelocity = 3;
      obstacleImage.scaleX = 1;
      obstacleImage.scaleY = 1;
    }
    

    function createEnemy(x, y, speed, health){
      var enemy = game.createGameItem("enemy", 25);// creates enemy game item and adds it to game
      var redSquare = draw.rect(50, 50, "red");// creates a red square and stores it in the ver redSquare
      redSquare.x = -25;// offsets the image from the hitzone by -25 pixels
      redSquare.y = -25;// offsets the image from the hitzone ny -25 pixels
      enemy.addChild(redSquare);// add red square as a child to enemy code
      enemy.x = x;// x pos of enemy
      enemy.y = y;// y pos of enemy
      game.addGameItem(enemy);// adds enemy to the game
      enemy.velocityX -= speed;// how fast the enemy moves on the x axis
      enemy.rotationalVelocity = 10;// sets the rotational velocity of the enemy
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(health)// subtracts 10 health from hallBot's HUD
      };
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);// increases your score when halle shoots the enemy
        enemy.fadeOut();// enemy fades out when Halle shoots them
        //enemy.shrink();
        //enemy.flyTo(0,0);
      };
    }
    
    

    function createReward(x, y, speed, health){
      var reward = game.createGameItem("reward", 25);// creates reward game item and adds it to game
      var blueSquare = draw.rect(50, 50, "blue");// creates a blue square and stores it in the ver blueSquare
      blueSquare.x = -25;// offsets the image from the hitzone by -25 pixels
      blueSquare.y = -25;// offsets the image from the hitzone ny -25 pixels
      reward.addChild(blueSquare);// add blue square as a child to reward code
      reward.x = x;// x pos of reward
      reward.y = y;// y pos of reward
      game.addGameItem(reward);// adds reward to the game
      reward.velocityX -= speed;// how fast the reward moves on the x axis
      reward.onPlayerCollision = function () {
        game.increaseScore(50);// increases your score when halle shoots the enemy
        game.changeIntegrity(health)// subtracts 10 health from hallBot's HUD
        reward.fadeOut();// reward fades out when Halle shoots them
        //enemy.shrink();
        //enemy.flyTo(0,0);
      };
    }

    


    function createLevel(x, y, speed){
      var level = game.createGameItem("level", 25);// creates level game item and adds it to game
      var yellowSquare = draw.rect(50, 50, "yellow");// creates a yellow square and stores it in the ver yellowSquare
      yellowSquare.x = -25;// offsets the image from the hitzone by -25 pixels
      yellowSquare.y = -25;// offsets the image from the hitzone by -25 pixels
      level.addChild(yellowSquare);// add yellow square as a child to level code
      level.x = x;// x pos of level
      level.y = y;// y pos of level
      game.addGameItem(level);// adds level to the game
      level.velocityX -= speed;// how fast the level moves on the x axis
      level.onPlayerCollision = function () {
        level.shrink();
        startLevel();
      };
    }

    

    function startLevel() {
    
      // TODO 13 goes below here
      var level = levelData[currentLevel];// fetches the currentLevel from levelData array and stores it in var level
      var levelObjects = level.gameItems// retrive the array of gameItem and stores it in levelObjects

      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];

        if(element.type === "sawblade"){// checks the type key:value of the gameItems objects to determine which object
          createObstacles(element.x, element.y, element.hitSize, element.damage, element.image, element.rotation);// if the condition is true it will call the element
        }

        if(element.type === "enemy"){// checks the type key:value of the gameItems objects to determine which object
          createEnemy(element.x, element.y, element.speed, element.health);// if the condition is true it will call the element
        }

        if(element.type === "reward"){// checks the type key:value of the gameItems objects to determine which object
          createReward(element.x, element.y, element.speed, element.health);// if the condition is true it will call the element
        }

        if(element.type === "level"){// checks the type key:value of the gameItems objects to determine which object
          createLevel(element.x, element.y, element.speed);// if the condition is true it will call the element
        }

      }

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
