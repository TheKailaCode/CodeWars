// Instructions

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function (l, w) {
    // Return your answer
    if (w !== l) {
        return 2 * (l + w)
    } else if (l === w) {
        return l * w
    }
};

  // a 4 sided polygon is a square if all sides are equal otherwise if the length and width are not equal it is a rectangle
  // perimeter formula = 2(l+w)
  // area formula = l * w