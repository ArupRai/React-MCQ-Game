const quizService = {
    async getQuestions() {
      const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
      const data = await response.json();
      return data.results.map((question) => ({
        question: question.question,
        options: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
        correct_answer: question.correct_answer,
      }));
    },
  };
  
  export default quizService;
  