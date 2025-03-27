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
          { type: "sawblade", x: 1800, y: groundY - 50, hitSize: 25, damage: 20 },
          { type: "sawblade", x: 1400, y: groundY - 50, hitSize: 25, damage: 20 },
          { type: "sawblade", x: 1100, y: groundY - 50, hitSize: 25, damage: 20 },

          { type: "enemy", x: 1900, y: groundY - 50, speed: 2, health: -15 },
          { type: "enemy", x: 1000, y: groundY - 50, speed: 2, health: -15 },
          { type: "enemy", x: 1600, y: groundY - 50, speed: 2, health: -15 },

          { type: "reward", x: 500, y: groundY - 100, speed: 3, health: 10 },

          { type: "level", x: 1600, y: groundY - 50, speed: 3 },
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
