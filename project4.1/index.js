// Create a Math question
// Math question will have a random generated
// Question Type Multiplicatin question  with random number range 1-10
// Answer will be the product of the random number range and the random number range
// User will have to answer question
// On submit  answer answer will be compared with random generated answer
// If answer will be correct than score will be incremented
// If answer will be wrong than score will be decremented

const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm");
const scoreEl = document.getElementById("score");
let storedAnswer;
let score = 0;
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateQuestion = () => {
  const randomNumber1 = randomNumber(1, 10);
  const randomNumber2 = randomNumber(1, 10);
  const question = `Q. What is ${randomNumber1} multiply by ${randomNumber2} ?`;
  const answer = randomNumber1 * randomNumber2;
  return { question, answer };
};

const showQuestion = () => {
  const { question, answer } = generateQuestion();
  questionEl.innerText = question;
  storedAnswer = answer;
};
showQuestion();

const checkAnswer = (event) => {
  event.preventDefault();
  const formData = new FormData(questionFormEl);

  const userAnswer = +formData.get("answer");
  if (userAnswer === storedAnswer) {
    score += 1;
  } else {
    score -= 1;
  }
  scoreEl.innerText = score;
  event.target.reset();
  showQuestion();
  console.log("answer", userAnswer);
};
