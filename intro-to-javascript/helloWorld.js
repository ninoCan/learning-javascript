// First print
console.log('Hello' + ' ' + 'World!')

//length of an object
var string = 'Teaching the world how to code'
console.log(string.length)
var str2 = 'Codecademy'
var str3 = ' Remove whitespace '
console.log(str2.toUpperCase())
console.log(str3.trim())

// we can use the built-in object Math to call
// elementary mathematical functions
console.log(Math.random()*100)
console.log(Math.ceil(43.8))
// to check for integers, we can use the Number object instead
console.log(Number.isInteger(2017))

// variable can be assigned via the keywords 'let' and 'var'
// followed by the assignment operator '='
let changeMe = true
// This kind of variables are mutable
changeMe = false
console.log(changeMe)
// Actually, even 'var' it's a mutable.
// Static immutability is achieved through 'const'
const entree = 'Enchiladas'
console.log(entree)
try {
    entree = 'Tacos'
} catch {
    console.log('This would raise a runtime Error')
    console.log('TypeError: Assignment to constant variable.')
}
// Learn more about this at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
// Let’s take one more glance at the concepts we just learned:

// - Data is printed, or logged, to the console, a panel that displays messages, with console.log().
// - We can write single-line comments with // and multi-line comments between /* and */.
// - There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.
// - Numbers are any number without quotes: 23.8879
// - Strings are characters wrapped in single or double quotes: 'Sample String'
// - The built-in arithmetic operators include +, -, *, /, and %.
// - Objects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.
// - Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().
// - We can access properties and methods by using the ., dot operator.
// - Built-in objects, including Math, are collections of methods and properties that JavaScript provides.

// Here are a few more resources to add to your toolkit:

// Codecademy Docs: JavaScript https://www.codecademy.com/resources/docs/javascript
// Codecademy Workspaces: JavaScript https://www.codecademy.com/workspaces/new
