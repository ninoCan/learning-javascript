let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
 levelUp += 5
 powerLevel -= 100 
 multiplyMe *= 11
 quarterMe /= 4

// // These console.log() statements below will check the values of the variables.
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

// There is also the single increment operators
let gainedDollar = 3;
let lostDollar = 50;

console.log('gainedDollar ++: ', gainedDollar ++ )
console.log('lostDollar--: ', lostDollar--)

// As previously seen, operations can apply to strings too
var favoriteAnimal = 'platipus'
const baseString = 'My favorite animal: '
console.log(baseString + favoriteAnimal)
// String can be interpolated
const myName = 'nino'
const myCity = 'Jyväskylä'
const interpolatedString = `My name is ${myName}. My favorite city is ${myCity}`
console.log(interpolatedString)

// If we try to print an uninitialize name:
try {
    console.log(nonExistingVariable)
} catch {
    console.log('ReferenceError: interpolatedString is not defined')
}

// Javascript is a typed language
let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable) // prints 'string'
// but types are held weakly
newVariable = 1
console.log(typeof newVariable) // prints 'number'

// Variable of different kinds are casted on-the-fly
var string = 'A string'
var num = 42
console.log(string + num)
console.log(typeof (string + num))
num = ' now a string'
console.log(string + num)
console.log(typeof (string + num))
// Let’s review what we learned:

// - Variables hold reusable data in a program and associate it with a name.
// - Variables are stored in memory.
// - The var keyword is used in pre-ES6 versions of JS.
// - let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.
// - Variables that have not been initialized store the primitive data type undefined.
// - Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
// - The + operator is used to concatenate strings including string values held in variables.
// - In ES6, template literals use backticks ` and ${} to interpolate values into a string.
// - The typeof keyword returns the data type (as a string) of a value.

