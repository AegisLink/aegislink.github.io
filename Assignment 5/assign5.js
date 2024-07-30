// ASSIGNMENT 5
// A. and C.


let name1="Lucas"
let weightkg1="78"
let heightm1="1.69"

let Lucasbmi1 = (weightkg1 / (heightm1 ** 2))
console.log(Lucasbmi1.toFixed(2))

let name2="Peter"
let weightkg2="92"
let heightm2="1.95"

let Peterbmi2 = (weightkg2 / (heightm2 ** 2))
console.log(Peterbmi2.toFixed(2))

const bmihigher = Lucasbmi1 > Peterbmi2 ? "higher" : "lower"

console.log("The BMI of Peter is " + Peterbmi2.toFixed(1) + ",\n" + "The Bmi of Lucas is " + Lucasbmi1.toFixed(1) + ",\n" + "Peter's BMI is higher than Lucas's BMI that is " + (Peterbmi2 > Lucasbmi1))


console.log("Lucas' BMI " + "(" + Lucasbmi1.toFixed(1) + ") is " + bmihigher + " than Peter's (" + Peterbmi2.toFixed(1) + ")!")

console.log(bmihigher)



// B. and D.

// let C = "100"
// let F = "55"

let C = prompt('Enter temperature in Celsius', '')
let F = prompt('Enter temperature in Fahrenheit', '')


let ConvertToF = 9/5 * C + 32
let ConvertToC = 5/9 * (F-32)

console.log( C + "°C is " + ConvertToF.toFixed(1) +"°F")
console.log( F + "°F is " + ConvertToC.toFixed(1) +"°C")


console.log("The temperature in Celsius is " + Number(ConvertToC.toFixed(1) ) + "°C")
console.log("The temperature in Fahrenheit is " + Number(ConvertToF.toFixed(1) ) + "°F")


const ConvertCelsiusToFahrenheit = (C) => C + "°C is " + (9/5 * C +32) + "°F"

const ConvertFarenheitToCelsius = (F) => F + "°F is " + (5/9 * (F-32)) + "°C"




