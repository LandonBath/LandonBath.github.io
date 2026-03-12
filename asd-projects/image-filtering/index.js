// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(reddify);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) { 
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      var pixel = image[i][j];
      var pixelArray = rgbStringToArray(pixel);
      filterFunction(pixelArray);
      var updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel;
    }
  }
}



// TODO 9 Create the applyFilterNoBackground function
//Use a nested for loop to apply the filter to every pixel except the background
function applyFilterNoBackground(filterFunction) { 
  var backgroundColor = image[0][0];
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      if (image[i][j] !== backgroundColor) {
        var pixel = image[i][j];
        var pixelArray = rgbStringToArray(pixel);
        filterFunction(pixelArray);
        var updatedPixel = rgbArrayToString(pixelArray);
        image[i][j] = updatedPixel;
      }

    }
  }
}

// TODO 6: Create the keepInBounds function
// this function should take in a number and return that number if it is between 0 and 255
 function keepInBounds(num) { 
  if (num < 0) {
    return 0;
  }
  if (num > 255) {
    return 255;
  }
  return num;
}

// TODO 4: Create reddify filter function
// this function should take in a pixel array and set the red value to 200
function reddify(pixelArray) {
  pixelArray[RED] = 200;
}

// TODO 7 & 8: Create more filter functions
// this function should decrease the blue value of a pixel by 50
function decreaseBlue(pixelArray) {
  var newBlue = pixelArray[BLUE] - 50;
  newBlue = keepInBounds(newBlue);
  pixelArray[BLUE] = newBlue;
}

// this function should increase the green value of a pixel by the blue value of the same pixel
function increaseGreenByBlue(pixelArray) {
  var newGreen = pixelArray[GREEN] + pixelArray[BLUE];
  newGreen = keepInBounds(newGreen);
  pixelArray[GREEN] = newGreen;
}

// CHALLENGE code goes below here
