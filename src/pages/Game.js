import React, { useState, useEffect } from 'react';
import Question from '../components/Questions';
import ScoreBoard from '../components/ScoreBoard';
import quizService from '../service/quizeServices';

function Game() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    quizService.getQuestions().then(setQuestions);
  }, []);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (currentQuestionIndex >= questions.length) {
    return <ScoreBoard score={score} total={questions.length} />;
  }

  return (
    <div className="game">
      <Question
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

export default Game;
