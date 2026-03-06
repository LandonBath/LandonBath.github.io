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
  for (var row = 0; row < image.length; row++) {
    for (var column = 0; column < image[row].length; column++) {
      var currentPixel = image[row][column];
      filterFunction(currentPixel);
      
    }
  }
}



// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  for (var row = 0; row < image.length; row++) {
    for (var column = 0; column < image[row].length; column++) {
      var currentPixel = image[row][column];
      if (!(currentPixel.r === 0 && currentPixel.g === 0 && currentPixel.b === 0)) {
        filterFunction(currentPixel);
      }
    }
  }
}

// TODO 6: Create the keepInBounds function
 function keepInBounds(value) {
   if (value < 0) {
     return 0;
   } else if (value > 255) {
     return 255;
   } else {
     return value;
   }
 }

// TODO 4: Create reddify filter function
function reddify(pixel) {
  pixel.r = keepInBounds(pixel.r + 50);
}
var testArray = [100, 100, 100];
reddify(testArray);
console.log(testArray); // Should show [200, 100, 100]

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixel) {
  pixel.b = keepInBounds(pixel.b - 50);
}

function increaseGreenByBlue(pixel) {
  pixel.g = keepInBounds(pixel.g + pixel.b);
}

// CHALLENGE code goes below here
