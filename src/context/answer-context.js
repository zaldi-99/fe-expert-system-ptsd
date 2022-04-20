export const AnswerContext = React.createContext({});

const AnswerProvider = ({ children }) => {
  return <AnswerContext.Provider>{children}</AnswerContext.Provider>;
};

export default AnswerProvider;
