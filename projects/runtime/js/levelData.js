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
          { type: "sawblade", x: 2200, y: groundY - 10, hitSize: 25, damage: 23, image: "img/sawblade.png", rotation: 10 },
          { type: "sawblade", x: 2500, y: groundY - 10, hitSize: 25, damage: 23, image: "img/sawblade.png", rotation: 10 },
          { type: "sawblade", x: 2800, y: groundY - 10, hitSize: 25, damage: 23, image: "img/sawblade.png", rotation: 10 },
          { type: "sawblade", x: 3300, y: groundY - 10, hitSize: 25, damage: 23, image: "img/sawblade.png", rotation: 10 },
          { type: "sawblade", x: 3700, y: groundY - 10, hitSize: 25, damage: 23, image: "img/sawblade.png", rotation: 10 },

          { type: "enemy", x: 3600, y: groundY - 50, speed: 3, health: -46, image: "img/monster.png", xScale: 1, yScale: 1, hitX: -80, hitY: -120 },
          { type: "enemy", x: 1000, y: groundY - 50, speed: 4, health: -35, image: "img/cacodemon.png", xScale: 0.5, yScale: 0.5, hitX: -46, hitY: -60 },
          { type: "enemy", x: 3600, y: groundY - 70, speed: 7, health: -15, image: "img/lostSoul.png", xScale: 0.5, yScale: 0.5, hitX: -36, hitY: -60 },
          { type: "enemy", x: 2300, y: groundY - 70, speed: 7, health: -15, image: "img/lostSoul.png", xScale: 0.5, yScale: 0.5, hitX: -36, hitY: -60 },

          { type: "reward", x: 3800, y: groundY - 10, speed: 0.1, health: 50, image: "img/Health.png" },

          { type: "level", x: 3950, y: groundY - 10, speed: 0.1 },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 10, hitSize: 25, damage: 23, image: "img/sawblade.png", rotation: 10 },
          { type: "sawblade", x: 600, y: groundY - 10, hitSize: 25, damage: 23, image: "img/sawblade.png", rotation: 10 },
          { type: "sawblade", x: 900, y: groundY - 10, hitSize: 25, damage: 23, image: "img/sawblade.png", rotation: 10 },
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
