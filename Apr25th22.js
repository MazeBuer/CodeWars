/* You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square. If it is a square return its area, if it is a rectangle return its perimeter. */
const areaOrPerimeter = function (l,w) {
    if( l === w ) {
        return l*w
    }else {
        return ( (l*2)+ (w*2))
    }
}

    //arrow fucntion
let areaOfPerimeter = (l,w) => l===w ? (l*w) : ( (l*2)+ (w*2));

