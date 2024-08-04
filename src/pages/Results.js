import React from 'react';

function Results({ score, total }) {
  return (
    <div className="results">
      <h2>Final Score: {score} / {total}</h2>
      <p>Thank you for playing!</p>
    </div>
  );
}

export default Results;
