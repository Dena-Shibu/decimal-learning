import {useState} from 'react';
function Learn() {
  return (
    <div className="learn-container">
      <h1>📖 Learn Decimals</h1>

      <h2>1. What are Decimals?</h2>
      <p>
        Decimals are another way of writing fractions. They help us represent
        parts of a whole using a decimal point (.).
      </p>

      <p><strong>Example:</strong></p>
      <p>1/10 = 0.1</p>
      <p>3/10 = 0.3</p>

      <hr />

      <h2>2. Decimal Place Value</h2>
      <p>
        The first digit after the decimal point is called the <b>Tenths</b>
        place. The second digit is called the <b>Hundredths</b> place.
      </p>

      <p><strong>Example:</strong></p>
      <p>0.45</p>
      <ul>
        <li>4 → Tenths</li>
        <li>5 → Hundredths</li>
      </ul>

      <hr />

      <h2>3. Fractions to Decimals</h2>

      <p>43/10 = 4.3</p>
      <p>439/100 = 4.39</p>
      <p>4391/1000 = 4.391</p>

      <hr />

      <h2>4. Dividing by 10, 100 and 1000</h2>

      <p>
        When dividing by 10, move the decimal point one place to the left.
      </p>

      <p>53 ÷ 10 = 5.3</p>

      <p>
        When dividing by 100, move the decimal point two places to the left.
      </p>

      <p>53 ÷ 100 = 0.53</p>

      <p>
        When dividing by 1000, move the decimal point three places to the left.
      </p>

      <p>53 ÷ 1000 = 0.053</p>

      <hr />

      <h2>Summary</h2>

      <ul>
        <li>Decimals represent fractions.</li>
        <li>Use a decimal point to separate whole numbers and fractional parts.</li>
        <li>Understand tenths and hundredths.</li>
        <li>Convert fractions into decimals.</li>
        <li>Move the decimal point while dividing by 10, 100 and 1000.</li>
      </ul>
    </div>
  );
}

export default Learn;
