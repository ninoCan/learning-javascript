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
