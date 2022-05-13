import { createContext, useState } from "react";

// Expected object:
// [
//     {
//         "idGejala": "1",
//         "answer": "1",
//     }
// ]
export const AnswerContext = createContext([]);

export const AnswerProvider = ({ children }) => {
  const [answers, setAnswers] = useState([]);

  return (
    <AnswerContext.Provider value={{ answers, setAnswers }}>
      {children}
    </AnswerContext.Provider>
  );
};
