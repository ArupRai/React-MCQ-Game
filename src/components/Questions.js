import React from 'react';

function Question({ question, options, onAnswer }) {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index} onClick={() => onAnswer(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
