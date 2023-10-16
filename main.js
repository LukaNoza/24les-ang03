// 1
// var Y = parseFloat(prompt("Enter the value of Y:"));
// var Z = parseFloat(prompt("Enter the value of Z:"));
// var X = (3 * Y - Z) / 2;

// alert("The value of X is: " + X);


// 2
// var sideA = parseFloat(prompt("Enter the length of side 'a':"));
// var sideB = parseFloat(prompt("Enter the length of side 'b':"));

// if (!isNaN(sideA) && !isNaN(sideB)) {
//   var sideASquared = Math.pow(sideA, 2);

//   var sideBSquared = Math.pow(sideB, 2);

//   var hypotenuseSquared = sideASquared + sideBSquared;

//   var hypotenuse = Math.sqrt(hypotenuseSquared);

//   alert("The hypotenuse of the right triangle is: " + hypotenuse);
// } else {
//   alert("Invalid input. Please enter valid numbers for side 'a' and side 'b'.");
// }


// 3
// var sideA = parseFloat(prompt("Enter the length of side 'A':"));
// var sideB = parseFloat(prompt("Enter the length of side 'B':"));
// var sideC = parseFloat(prompt("Enter the length of side 'C':"));

// if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
//   var perimeter = sideA + sideB + sideC;

//   alert("The perimeter of the triangle is: " + perimeter);
// } else {
//   alert("Invalid input. Please enter valid numbers for all sides (A, B, C).");
// }


// 4
// var a = 2;
// var b = -2;
// var c = 13;

// var discriminant = b * b - 4 * a * c;

// var x1, x2;

// if (discriminant > 0) {
//   x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//   x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//   console.log("The solutions are real and distinct:");
//   console.log("X1 = " + x1);
//   console.log("X2 = " + x2);
// } else if (discriminant === 0) {
//   x1 = -b / (2 * a);
//   console.log("The solution is a double root:");
//   console.log("X1 = " + x1);
// } else {
//   var realPart = -b / (2 * a);
//   var imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
//   console.log("The solutions are complex:");
//   console.log("X1 = " + realPart + " + " + imaginaryPart + "i");
//   console.log("X2 = " + realPart + " - " + imaginaryPart + "i");
// }


