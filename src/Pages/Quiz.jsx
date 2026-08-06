import { useState } from "react";

function Quiz() {

const [answers, setAnswers] = useState(Array(15).fill(""));
const [score, setScore] = useState(0);

const questions = [
{id:1, question:"Convert the fraction into a decimal.", fraction:"89/10", correctAnswer:"8.9"},
{id:2, question:"Convert the fraction into a decimal.", fraction:"909/100", correctAnswer:"9.09"},
{id:3, question:"Convert the fraction into a decimal.", fraction:"5673/1000", correctAnswer:"5.673"},
{id:4, question:"Write the decimal number.", fraction:"8/10", correctAnswer:"0.8"},
{id:5, question:"Write the decimal number.", fraction:"43/100", correctAnswer:"0.43"},
{id:6, question:"Write the decimal number.", fraction:"27/1000", correctAnswer:"0.027"},
{id:7, question:"Divide and write the decimal.", fraction:"78 ÷ 10", correctAnswer:"7.8"},
{id:8, question:"Divide and write the decimal.", fraction:"94 ÷ 100", correctAnswer:"0.94"},
{id:9, question:"Divide and write the decimal.", fraction:"452 ÷ 1000", correctAnswer:"0.452"},
{id:10, question:"Write the fraction as a decimal.", fraction:"6/10", correctAnswer:"0.6"},
{id:11, question:"Write the fraction as a decimal.", fraction:"66/100", correctAnswer:"0.66"},
{id:12, question:"Identify the tenths digit.", fraction:"7.34", correctAnswer:"3"},
{id:13, question:"Identify the hundredths digit.", fraction:"0.999", correctAnswer:"4"},
{id:14, question:"Which number is greater?", fraction:"0.9 or 0.07", correctAnswer:"0.9"},
{id:15, question:"Arrange in ascending order.", fraction:"0.04, 0.7, 0.89", correctAnswer:"0.04, 0.7, 0.89"}
];

function submitQuiz() {
let totalScore = 0;

for (let i = 0; i < questions.length; i++) {
if (answers[i].trim() === questions[i].correctAnswer) {
totalScore++;
}
}

setScore(totalScore);
}

return (
<div className="quiz-container">

<h1>📝 Decimal Quiz</h1>

{questions.map((q, index) => (
<div className="question-card" key={q.id}>

<h2>Question {q.id}</h2>

<p>{q.question}</p>

<h3>{q.fraction} = ?</h3>

<input
type="text"
placeholder="Enter your answer"
value={answers[index]}
onChange={(e) => {
const newAnswers = [...answers];
newAnswers[index] = e.target.value;
setAnswers(newAnswers);
}}
/>

</div>
))}

<button onClick={submitQuiz}>
Submit Quiz
</button>

<h2>Your Score: {score} / {questions.length}</h2>

</div>
);
}

export default Quiz;