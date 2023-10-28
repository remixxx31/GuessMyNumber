import { prompt, playGame, random } from "./prompt.js";

// console.log(targetNumber);

console.log(`Welcome to the Number Guessing Game!

Rules:
1. The system will generate a random number between 0 and 100.
2. Your task is to guess this number.
3. Enter a number when prompted.
4. If your guess is too high or too low, you'll be notified, and you can guess again.
5. The game continues until you guess the correct number.

Let's get started!`);
const randomNumber = random(100);
playGame(randomNumber);
