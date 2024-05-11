let userName = '';
userName ? console.log(`Hello ${userName}!`) : console.log('Hello');
let userQuestion = 'Bola ke berapa ini ?';
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
if (randomNumber === 1) {
  eightBall = 'It is certain';
} else if (randomNumber === 2) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 3) {
  eightBall = 'Reply hazy try again';
}
console.log(randomNumber);
console.log(eightBall);
