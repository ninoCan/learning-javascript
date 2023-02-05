// longhand
const fruits = ['mango', 'peach', 'banana'];
for (let i=0; i < fruits.length; i++)
    console.log(fruits[i])

// shorthand
for (let fruit of fruits)
    console.log(fruit)

// index only
for (let index in fruits)
    console.log(index)
