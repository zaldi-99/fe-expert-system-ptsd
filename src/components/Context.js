import { createContext, useState } from "react";

// Expected object:
// [
//     {
//         "idGejala": "1",
//         "answer": "1",
//     }
// ]
export const AnswerContext = createContext({
  answers: [],
  addAnswer: (id, question, answer) => {},
});

export const AnswerProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  const addAnswer = (id, question, answer) => {
    const copy = answers.slice();

    for (let i = 0; i < answers.length; i++) {
      if (answers[i].id === id) {
        copy[i] = { id, question, answer };
        setAnswers(copy);
        return;
      }
    }

    setAnswers(current => [...current, { id, question, answer }]);
  };

  return (
    <AnswerContext.Provider value={{ answers, addAnswer }}>
      {children}
    </AnswerContext.Provider>
  );
};
