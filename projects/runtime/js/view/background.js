var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        //var tree;
        var buildings = [];
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var night = draw.bitmap("img/night.png");//makes rectangle and stores it in the variable backgroundFill
            night.scaleX = 3;
            night.scaleY = 4;
            night.x = canvas.width - 1000;
            night.y = groundY - 500;
            background.addChild(night);
            
            // TODO 2: - Add a moon and starfield
            for(var i = 0; i < 100; i++){
                var circle = draw.circle(4, "white", "LightGray", 2);// creates a circle
                circle.x = canvasWidth * Math.random();// set random x pos within canvas width
                circle.y = groundY * Math.random();// set random y pos within groundY range
                background.addChild(circle);// adds the star to the background containr
            }


            var moon = draw.bitmap("img/moon.png");// creates a bitmap object using the moon image and stores it in the variable
            moon.x = canvas.width - 500;// sets the moon's x position
            moon.y = groundY - 350;// sets the moon's y position
            moon.scaleX = 1;// scales the moon's width
            moon.scaleY = 1;// scales the moon's height
            background.addChild(moon);// add the moon to the background container
            
            

            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 7; i++) { // limits the amount of buildings you can have
                var buildingColors = ["white", "blue", "gray", "#48494B", "maroon", "white", "seal"];
                var buildingHeight = 300 * Math.random(); // the defalt height of the buildings
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1);// makes the shape of the building
                building.x = 200 * i; // the width of the building
                building.y = groundY - buildingHeight; // the height of the building
                background.addChild(building); // puts the buildings in the background
                buildings.push(building);
            }
            

            // TODO 3: Part 1 - Add a tree
            /* tree = draw.bitmap("img/tree.png"); // creates a bitmap object using the moon image and stores it in the variable
            tree.x = canvasWidth - 300; // the x position of the tree
            tree.y = groundY - 205; // the y position of the tree
            background.addChild(tree); // put the tree in the background */
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
           /* tree.x -= 3; // moves the tree to the to the left by subtracting 3 from its current x pos
            if (tree.x < -200) {
                tree.x = canvasWidth;
            } */
            
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];// the individual index of the buildings array stored in a variable building
                building.x -= 1;// subtracts 1 from the building's x pos; animate to the left
                if (building.x < -100){// checks if the x pos of the building is less than -100
                    building.x = canvasWidth;// if true, reset building's x to the right side of canvas
                }

            }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
