import React from 'react';

function ScoreBoard({ score, total }) {
  return (
    <div className="scoreboard">
      <h3>Your Score: {score} / {total}</h3>
    </div>
  );
}

export default ScoreBoard;
