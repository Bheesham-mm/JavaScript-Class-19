// Explain Code
// Declare an empty array to store numeric values extracted from the main array.
var numbersArr = [];

// Declare an empty array to store parameter (unit) strings extracted from the main array.
var paramtersArr = [];

// Initialize an array with strings containing both numbers and units.
var mainArr = ["10killogram", "55milligram", "30once", "11pounds"];

// Log the main array to the console to see its contents.
console.log("All Data>", mainArr);

// Loop through each element in the mainArr array.
for (var i = 0; i < mainArr.length; i++) {
    // Get the current element from the main array.
    var element = mainArr[i];
    
    // Extract the numeric part from the current element using parseInt.
    var numbersArray = parseInt(element);
    // Push the extracted number into the numbersArr array.
    numbersArr.push(numbersArray);
    
    // Extract the remaining part of the string (the unit) by slicing from the end of the numeric part.
    var paramter = element.slice(numbersArray.toString().length);
    
    // Uncomment these lines if you want to capitalize the first letter of the parameter.
    // var upercase = paramter.charAt(0).toUpperCase();
    // var result = upercase + paramter;
    
    // Push the extracted parameter (unit) into the paramtersArr array.
    paramtersArr.push(paramter);
}

// Log the parameter array to the console.
console.log("ParamtrArray>", paramtersArr);

// Log the numbers array to the console.
console.log("NumberArr>", numbersArr);

// var numbersArr = [];
// var paramtersArr = [];
// var mainArr = ["10killogram", "55milligram", "30once", "11pounds"];
// console.log("All Data>", mainArr)
// for (var i = 0; i < mainArr.length; i++) {
//     var element = mainArr[i];
    
//     var numbersArray = parseInt(element);
//     numbersArr.push(numbersArray);
    
//     var paramter = element.slice(numbersArray.toString().length);
//     // var upercase = paramter.charAt(0).toLocaleUpperCase();
//     // var result = upercase+paramter;
//     paramtersArr.push(paramter);
// }
// console.log("ParamtrArray>", paramtersArr);
// console.log("NumberArr>", numbersArr);