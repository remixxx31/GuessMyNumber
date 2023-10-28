import readlineSync from "readline-sync";

// ��� Nos fonctions vont utiliser la méthode `prompt`
// J'utilise une librairie afin que `prompt` soit synchrone pour éviter que tu aies besoin
// De gérer l’asynchrone dans tes fonctions
export function prompt(question) {
  // readlineSync.question returns the user's input once they hit enter
  const answer = readlineSync.question(question);
  // console.log(answer);
  return answer;
}

export const generateRandomNumber = (limit) => {
  try {
    let random = Math.round(Math.random() * limit);
    return random;
  } catch (e) {
    console.log(e);
  }
};

let count = 0;

export const random = (limit) => {
  return generateRandomNumber(limit);
};

export function playGame(target) {
  const answer = Number(prompt("Veuillez saisir un nombre: "));
  const replay = () => {
    const isAnotherGame = readlineSync.question(
      "Do you want to re-play a game? Y/N: "
    );
    if (isAnotherGame !== "Y") return;
    return playGame(target);
  };
  if (isNaN(answer)) {
    console.log(`${answer} n' est pas un nombre`);
    return playGame(target);
  } else if (answer === target) {
    let msg = console.log(
      `Congratulations The number it was ${target}, you guess in ${count} times !!! `
    );
    count = 0;
    replay();
    return msg;
  } else if (answer < target) {
    console.log("The number is too low ");
    count++;
    return playGame(target);
  } else if (answer > target) {
    console.log("The number is too high ");
    count++;
    return playGame(target);
  }
}
