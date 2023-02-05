// Say you have a dictionary
const pets = [
  { type: 'dog', name: 'Lassie'},
  { type: 'cat', name: 'Meowth'},
  { type: 'horse', name: 'Bojack'},
]

// You want to find the elements with values
function findPet(type, name) {
  for (pet of pets) {
    const match = (pet.type === type && pet.name === name)
    if (match) {
      return pet
    }
  }
}

// longhand
pet = findPet('horse', 'Bojack')

// shorthand
pet = pets.find(pet => pet.type === 'horse' && pet.name === 'Bojack')
