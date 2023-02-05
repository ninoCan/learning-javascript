const CHOICES = ['rock', 'paper', 'scissors']

/**
 * Rock paper scissors game! Try your luck against the computer!
 * @param {String} input Your choice to play against the pc
 * @return {void}
 */
const main = (input) => {
  console.log('hi');
  if (input != 'bomb'){
    let player = getUserChoice(input)
    let computer = generateComputerChoice()
    console.log(determineWinner(player, computer))
  } else {
    console.log('Player won! (cheat-mode)')
  }
}

/**
 * Helper fuction that check if computer has the upper-hand
 * @param {String} computer computer choice
 * @param {String} beater   the type that beats the player
 * @return {String}
 */
const _judgeWinner = (computer, beater) => {
  return (computer === beater) ? 'Computer' : 'Player'
}

/**
 * Compare the player and computer choices
 * @param {String} the type that beats the player
 * @param {String} computer choice
 * @return {String}
 */
const determineWinner = (player, computer) => {
  if (player == computer) {
    return 'It\' a tie!'
  }

  switch (player) {
    case 'rock': 
      return `${_judgeWinner(computer,'paper')} won!`;
      break;
    case 'paper':
      return `${_judgeWinner(computer,'scissors')} won!`;
      break;
    case 'scissors':
      return `${_judgeWinner(computer, 'rock')} won!`;
      break;
  }
}

const generateComputerChoice = () => CHOICES[Math.floor(Math.random()* 3)]

/**
 * Validator for player choice
 * @param {String} userInput player choice
 * @return {String} 
 */
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase()
  if (CHOICES.includes(userInput)) {
    return userInput
  } else {
    console.log(`ERROR: ${userInput} is not a valid choice!`)
  }
}

main('rock')
