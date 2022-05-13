import React, { useContext, useEffect, useState } from "react";
import { AnswerContext } from "../components/Context";

const Result = () => {
  const ctx = useContext(AnswerContext);

  const [result, setResult] = useState([]);

  //   useEffect(() => {
  //     localStorage.setItem("temp", JSON.stringify(ctx.answers));
  //   }, [ctx]);

  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("temp"));
    setResult(d);
  }, []);

  const forwardChaining = () => {
    if (result[0].answer === 1) {
      return <p>Hasil positif</p>;
    } else {
      return <p>Hasil ...</p>;
    }
  };

  return (
    <div>
      <p>Result</p>

      {result.map(ans => (
        <p key={ans.question}>
          {ans.answer} {ans.question}
        </p>
      ))}

      {result.length !== 0 && forwardChaining()}
    </div>
  );
};

export default Result;
