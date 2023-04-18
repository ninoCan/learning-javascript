t dogFactory = (name, breed, weight) => {
      return {
              _name: String(name),
              _breed: String(breed),
              _weight: Number(weight),
              get name(){
                        return this._name
                      },
              get breed() {
                        return this._breed
                      },
              get weight(){
                        return this._weight
                      },
              set name(aName) {
                        this._name=aName
                      },
              set breed(aBreed) {
                        this._breed=aBreed
                      },
              set weight(someWeight) {
                        this._weight=someWeight
                      },
              bark: () =>  'ruff! ruff!',
              eatTooManyTreats() {this._weight++}
            }
}

const doggy = dogFactory('Ralf','Beagle','1')
console.log(doggy)
doggy.eatTooManyTreats()
doggy.eatTooManyTreats()
console.log(doggy.weight + ' = 3?')
