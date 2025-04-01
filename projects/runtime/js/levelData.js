var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 1800, y: groundY - 30, hitSize: 25, damage: 20, image: "img/sawblade.png", rotation: 10 },
          { type: "sawblade", x: 1400, y: groundY - 30, hitSize: 25, damage: 25, image: "img/sawblade.png", rotation: 10 },
          { type: "sawblade", x: 2400, y: groundY - 30, hitSize: 25, damage: 23, image: "img/sawblade.png", rotation: 10 },

          { type: "enemy", x: 2400, y: groundY - 50, speed: 5, health: -15, },
          { type: "enemy", x: 1000, y: groundY - 50, speed: 5, health: -15, },
          { type: "enemy", x: 1600, y: groundY - 50, speed: 5, health: -15, },

          { type: "reward", x: 2600, y: groundY - 50, speed: 1, health: 30 },

          { type: "level", x: 3500, y: groundY - 50, speed: 1 },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
