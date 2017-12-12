"use strict";

// GIVEN
// E A D H B

// first pass looks for the minimal value, and swaps it with the value at the front of the list
// A E D H B

// next pass finds the minimal value after the first element (which is now in place) and swaps it.
// so from e, d, h, b..b is smallest and swap with the next value, which is e.
// A B D H E

// move on, and do another pass , D, H, E.
// D is smallest so everything stays
// A B D H E

// move on, and do another pass. H, E.
// E is smaller is swap H and E.
// A B D E H

var dataArray = [8,3,1,6,2];

function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

// given a certain pass
// we get the minimum value and swap it
function swapSmallerValuesToFront(data, outerIndex, lastIndex) {
  for (var innerIndex = outerIndex + 1; innerIndex <= lastIndex; innerIndex++) {
      console.log("");
      console.log("inner index: " + innerIndex + ", data[inner]: " + data[innerIndex]);
      console.log("data[outerIndex]: " + data[outerIndex]);

      if (data[innerIndex] < data[outerIndex]) {
          console.log(" We need to swap because current element is smaller");
          swap(data, innerIndex, outerIndex);
          console.log("---> data display: " + data);
      }
  }
}

function selectionSort(intArray) {

    var data = intArray.slice(0);
    var indexOfMinValue, temp;
    var lastIndex = data.length-1;

    // we always do length - 1 passes
    for (var pass = 0; pass <= lastIndex - 1; pass++) {
      console.log("---------------> Outer Index: " + pass + " <-----------");
      swapSmallerValuesToFront(data, pass, lastIndex);
    }

    return data;
}

let sortedArray = selectionSort(dataArray);
console.log(sortedArray);
