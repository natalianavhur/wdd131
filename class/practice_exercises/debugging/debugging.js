const PI = 3.14;
let area = 0;

// let radius = 3;
//console.log("Area 1 :", area);
//radius = 4;
//area = radius * radius * PI;
//console.log("Area 2 :", area);

function circleArea(radius){
    
    area = radius * radius * PI;
    return area;
}
area = circleArea(3);
console.log("Area of a circle with radius 3:", area);
area = circleArea(4);
console.log("Area of a circle with radius 4 :", area);
