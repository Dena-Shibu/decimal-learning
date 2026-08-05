import { useState } from "react";

function Quiz() {

const [answers, setAnswers] = useState(Array(15).fill(""));
const [score, setScore] = useState(0);

const questions = [
{id:1, question:"Convert the fraction into a decimal.", fraction:"43/10", correctAnswer:"4.3"},
{id:2, question:"Convert the fraction into a decimal.", fraction:"439/100", correctAnswer:"4.39"},
{id:3, question:"Convert the fraction into a decimal.", fraction:"4391/1000", correctAnswer:"4.391"},
{id:4, question:"Write the decimal number.", fraction:"7/10", correctAnswer:"0.7"},
{id:5, question:"Write the decimal number.", fraction:"25/100", correctAnswer:"0.25"},
{id:6, question:"Write the decimal number.", fraction:"9/1000", correctAnswer:"0.009"},
{id:7, question:"Divide and write the decimal.", fraction:"53 ÷ 10", correctAnswer:"5.3"},
{id:8, question:"Divide and write the decimal.", fraction:"84 ÷ 100", correctAnswer:"0.84"},
{id:9, question:"Divide and write the decimal.", fraction:"125 ÷ 1000", correctAnswer:"0.125"},
{id:10, question:"Write the fraction as a decimal.", fraction:"3/10", correctAnswer:"0.3"},
{id:11, question:"Write the fraction as a decimal.", fraction:"67/100", correctAnswer:"0.67"},
{id:12, question:"Identify the tenths digit.", fraction:"4.37", correctAnswer:"3"},
{id:13, question:"Identify the hundredths digit.", fraction:"8.549", correctAnswer:"4"},
{id:14, question:"Which number is greater?", fraction:"0.8 or 0.08", correctAnswer:"0.8"},
{id:15, question:"Arrange in ascending order.", fraction:"0.05, 0.5, 0.55", correctAnswer:"0.05, 0.5, 0.55"}
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