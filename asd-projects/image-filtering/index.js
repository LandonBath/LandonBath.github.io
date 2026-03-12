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
  applyFilter(image, reddify);
  applyFilter(image, increaseGreen);
  applyFilter(image, decreaseBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(image, filterFunction) {
  for (var x = 0; x < image.width; x++) {
    for (var y = 0; y < image.height; y++) {
      var pixel = image.getPixel(x, y);
      filterFunction(pixel);
    }
  }
}



// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(image, filterFunction) {
  for (var x = 0; x < image.width; x++) {
    for (var y = 0; y < image.height; y++) {

      var pixel = image.getPixel(x, y);

      if (!(pixel.getRed() > 200 &&
            pixel.getGreen() > 200 &&
            pixel.getBlue() > 200)) {
        filterFunction(pixel);
      }

    }
  }
}

// TODO 6: Create the keepInBounds function
 function keepInBounds(value) {
  if (value < 0) {
    value = 0;
  }
  if (value > 255) {
    value = 255;
  }
  return value;
}

// TODO 4: Create reddify filter function
function reddify(pixel) {
  pixel.setRed(200);
}

// TODO 7 & 8: Create more filter functions
function increaseGreen(pixel) {
  var value = pixel.getGreen();
  value = value + 50;
  value = keepInBounds(value);
  pixel.setGreen(value);
}

function decreaseBlue(pixel) {
  var value = pixel.getBlue();
  value = value - 50;
  value = keepInBounds(value);
  pixel.setBlue(value);
}

// CHALLENGE code goes below here
