import {useState} from 'react';
function Home({setCurrentPage}){
    return(
        <div className="home-container">
            <h1>📚 Decimal Methods</h1>

            <p>
                Welcome to the Decimal Learning App!
            </p>

            <p>
                Learn how to convert fractions into decimals, understand place values,
                and solve decimal problems in a fun and interactive way.
            </p>

            <h3>What You Will Learn</h3>

            <ul>
                <li>Fractions to Decimals</li>
                <li>Decimal Place Values</li>
                <li>Dividing by 10, 100 and 1000</li>
                <li>Practice Questions</li>
                <li>Interactive Quiz</li>
            </ul>

            <button onClick={() => setCurrentPage("learn")}>
                📖 Start Learning
            </button>
            </div>
    )
}

export default Home;