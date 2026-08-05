import {useState} from 'react';
function Practice() {
    const[answers,setAnswers]=useState(Array(15).fill(''));
    const[results,setResults]=useState(Array(15).fill(''));
    

    const questions=[
        {id: 1, question: "Convert the fraction into a decimal.", fraction: "43/10", correctAnswer: "4.3"},
        {id: 2, question: "Convert the fraction into a decimal.", fraction: "439/100", correctAnswer: "4.39"},
        {id: 3, question: "Convert the fraction into a decimal.", fraction: "4391/1000", correctAnswer: "4.391"},
        {id: 4, question: "Write the decimal number.", fraction: "7/10", correctAnswer: "0.7"},
        {id: 5, question: "Write the decimal number.", fraction: "25/100", correctAnswer: "0.25"},
        {id: 6, question: "Write the decimal number.", fraction: "9/1000", correctAnswer: "0.009"},
        {id: 7, question: "Divide and write the decimal.", fraction: "53 ÷ 10", correctAnswer: "5.3"},
        {id: 8, question: "Divide and write the decimal.", fraction: "84 ÷ 100", correctAnswer: "0.84"},
        {id: 9, question: "Divide and write the decimal.", fraction: "125 ÷ 1000", correctAnswer: "0.125"},
        {id: 10, question: "Write the fraction as a decimal.", fraction: "3/10", correctAnswer: "0.3"},
        {id: 11, question: "Write the fraction as a decimal.", fraction: "67/100", correctAnswer: "0.67"},
        {id: 12, question: "Identify the tenths digit.", fraction: "4.37", correctAnswer: "3"},
        {id: 13, question: "Identify the hundredths digit.", fraction: "8.549", correctAnswer: "4"},
        {id: 14, question: "Which number is greater?", fraction: "0.8 or 0.08", correctAnswer: "0.8"},
        {id: 15, question: "Arrange in ascending order.", fraction: "0.5, 0.05, 0.55", correctAnswer: "0.05, 0.5, 0.55"}

    ]
    function checkAnswer(index){
        if(answers[index].trim()===questions[index].correctAnswer){
            const newResults = [...results];
            newResults[index] = "Correct!";
            setResults(newResults);
        }else{
            const newResults = [...results];
            newResults[index] = "Incorrect. The correct answer is "+questions[index].correctAnswer;
            setResults(newResults);
        }

    }


  return (
    <div className="practice-container">

      <h1>✏ Practice Decimals</h1>

      <div className="question-card">
        <h2>Question 1</h2>
        <p>Convert the fraction into a decimal.</p>
        <h3>43/10 = ?</h3>
        <input type="text" placeholder="Enter your answer" value={answers[0]} onChange={(e) => { const newAnswers = [...answers]; newAnswers[0] = e.target.value; setAnswers(newAnswers); }} />
        <button onClick={() => checkAnswer(0)}>Check Answer</button>
        <p>{results[0]}</p>
      </div>

    <div className="question-card">
     <h2>Question 2</h2>
     <p>Convert the fraction into a decimal.</p>
     <h3>439/100 = ?</h3>

     <input type="text" placeholder="Enter your answer" value={answers[1]} onChange={(e) => {const newAnswers = [...answers];newAnswers[1] = e.target.value;setAnswers(newAnswers);}} />

    <button onClick={() => checkAnswer(1)}>
    Check Answer
    </button>

    <p>{results[1]}</p>
</div>

      <div className="question-card">
        <h2>Question 3</h2>
        <p>Convert the fraction into a decimal.</p>
        <h3>4391/1000 = ?</h3>
        <input type="text" placeholder="Enter your answer" value={answers[2]} onChange={(e) => { const newAnswers = [...answers]; newAnswers[2] = e.target.value; setAnswers(newAnswers); }} />
        <button onClick={() => checkAnswer(2)}>Check Answer</button>
        <p>{results[2]}</p>
      </div>

      <div className="question-card">
        <h2>Question 4</h2>
        <p>Write the decimal number.</p>
        <h3>7/10 = ?</h3>
        <input type="text" placeholder="Enter your answer" value={answers[3]} onChange={(e) => { const newAnswers = [...answers]; newAnswers[3] = e.target.value; setAnswers(newAnswers); }} />
        <button onClick={() => checkAnswer(3)}>Check Answer</button>
        <p>{results[3]}</p>
      </div>

      <div className="question-card">
        <h2>Question 5</h2>
        <p>Write the decimal number.</p>
        <h3>25/100 = ?</h3>
        <input type="text" placeholder="Enter your answer" value={answers[4]} onChange={(e) => { const newAnswers = [...answers]; newAnswers[4] = e.target.value; setAnswers(newAnswers); }} />
        <button onClick={() => checkAnswer(4)}>Check Answer</button>
        <p>{results[4]}</p>
      </div>

    <div className="question-card">
        <h2>Question 6</h2>
        <p>Write the decimal number.</p>
        <h3>9/1000 = ?</h3>
        <input type="text" placeholder="Enter your answer" value={answers[5]} onChange={(e) => { const newAnswers = [...answers]; newAnswers[5] = e.target.value; setAnswers(newAnswers); }} />
        <button onClick={() => checkAnswer(5)}>Check Answer</button>
        <p>{results[5]}</p>
    </div>

      <div className="question-card">
        <h2>Question 7</h2>
        <p>Divide and write the decimal.</p>
        <h3>53 ÷ 10 = ?</h3>
        <input type="text" placeholder="Enter your answer" value={answers[6]} onChange={(e) => { const newAnswers = [...answers]; newAnswers[6] = e.target.value; setAnswers(newAnswers); }} />
        <button onClick={() => checkAnswer(6)}>Check Answer</button>
        <p>{results[6]}</p>
      </div>

      <div className="question-card">
        <h2>Question 8</h2>
        <p>Divide and write the decimal.</p>
        <h3>84 ÷ 100 = ?</h3>
        <input type="text" placeholder="Enter your answer" value={answers[7]} onChange={(e) => { const newAnswers = [...answers]; newAnswers[7] = e.target.value; setAnswers(newAnswers); }} />
        <button onClick={() => checkAnswer(7)}>Check Answer</button>
        <p>{results[7]}</p>
      </div>

      <div className="question-card">
        <h2>Question 9</h2>
        <p>Divide and write the decimal.</p>
        <h3>125 ÷ 1000 = ?</h3>
        <input type="text" placeholder="Enter your answer" value={answers[8]} onChange={(e) => { const newAnswers = [...answers]; newAnswers[8] = e.target.value; setAnswers(newAnswers); }} />
        <button onClick={() => checkAnswer(8)}>Check Answer</button>
        <p>{results[8]}</p>
      </div>

      <div className="question-card">
        <h2>Question 10</h2>
        <p>Write the fraction as a decimal.</p>
        <h3>3/10 = ?</h3>
        <input type="text" placeholder="Enter your answer" value={answers[9]} onChange={(e) => { const newAnswers = [...answers]; newAnswers[9] = e.target.value; setAnswers(newAnswers); }} />
        <button onClick={() => checkAnswer(9)}>Check Answer</button>
        <p>{results[9]}</p>
      </div>

      <div className="question-card">
        <h2>Question 11</h2>
        <p>Write the fraction as a decimal.</p>
        <h3>67/100 = ?</h3>
        <input type="text" placeholder="Enter your answer" value={answers[10]} onChange={(e) => { const newAnswers = [...answers]; newAnswers[10] = e.target.value; setAnswers(newAnswers); }} />
        <button onClick={() => checkAnswer(10)}>Check Answer</button>
        <p>{results[10]}</p>
      </div>

      <div className="question-card">
        <h2>Question 12</h2>
        <p>Identify the tenths digit.</p>
        <h3>4.37</h3>
        <input type="text" placeholder="Enter your answer" value={answers[11]} onChange={(e) => { const newAnswers = [...answers]; newAnswers[11] = e.target.value; setAnswers(newAnswers); }} />
        <button onClick={() => checkAnswer(11)}>Check Answer</button>
        <p>{results[11]}</p>
      </div>

      <div className="question-card">
        <h2>Question 13</h2>
        <p>Identify the hundredths digit.</p>
        <h3>8.549</h3>
        <input type="text" placeholder="Enter your answer" value={answers[12]} onChange={(e) => { const newAnswers = [...answers]; newAnswers[12] = e.target.value; setAnswers(newAnswers); }} />
        <button onClick={() => checkAnswer(12)}>Check Answer</button>
        <p>{results[12]}</p>
      </div>

      <div className="question-card">
        <h2>Question 14</h2>
        <p>Which number is greater?</p>
        <h3>0.8 or 0.08</h3>
        <input type="text" placeholder="Enter your answer" value={answers[13]} onChange={(e) => { const newAnswers = [...answers]; newAnswers[13] = e.target.value; setAnswers(newAnswers); }} />
        <button onClick={() => checkAnswer(13)}>Check Answer</button>
        <p>{results[13]}</p>
      </div>

      <div className="question-card">
        <h2>Question 15</h2>
        <p>Arrange in ascending order.</p>
        <h3>0.5, 0.05, 0.55</h3>
        <input type="text" placeholder="Enter your answer" value={answers[14]} onChange={(e) => { const newAnswers = [...answers]; newAnswers[14] = e.target.value; setAnswers(newAnswers); }} />
        <button onClick={() => checkAnswer(14)}>Check Answer</button>
        <p>{results[14]}</p>
      </div>

    </div>
  );
}

export default Practice;



