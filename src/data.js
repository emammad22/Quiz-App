import questions from './question.json';

export default questions.map((question) => {
  const {
    id,
    question: text,
    answers,
    correct_answers,
    multiple_correct_answers,
    difficulty,
    category,
  } = question;

  return {
    id,
    text,
    category,
    difficulty,
    multiple: multiple_correct_answers === 'true',
    answers: Object.entries(answers)
      .filter((entry) => entry[1] !== null)
      .map((entry) => {
        const [key, value] = entry;
        const correctAnswerKey = key + '_correct';
        const isCorrect = correct_answers[correctAnswerKey];

        return {
          text: value,
          isCorrect: isCorrect === 'true',
        };
      }),
  };
});
