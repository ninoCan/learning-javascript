function main() {
  let name = askUserName()
  promptUserQuestion()
  console.log(answer());
  greet(name)
}

const askUserName = () => {
  // store userName
  let userName = prompt("What's your name?");
  console.log(userName ? `Hello, ${userName}!` : 'Hello!');
  return userName
}

const greet = (name = '') => {
  console.log(
    (name) ? `Goodbye, ${name}!` : "Goodbye!"
  )
}

const promptUserQuestion = () => {
  let userQuestion = prompt("What do you want to ask the ball?");
  console.log(userQuestion);
}

const _pick_answer = () => {
}
const answer = () => {
  // generate the eightball answer;
  let randomNumber = Math.floor(Math.random() * 8);

  switch (randomNumber) {
    case 0:
      return 'It is certain'; break;
    case 1:
      return 'It is decidedly so'; break;
    case 2:
      return 'Reply hazy try again'; break;
    case 3:
      return 'Cannot predict now'; break;
    case 4:
      return 'Do not count on it'; break;
    case 5:
      return 'My sources say no'; break;
    case 6:
      return 'Outlook not so good'; break;
    case 7:
      return 'Signs point to yes'; break;
  }
}
