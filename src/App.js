import "./App.css";
import { AnswerProvider } from "./components/Context";
import Router from "./router/Router";

function App() {
  return (
    <AnswerProvider>
      <Router />
    </AnswerProvider>
  );
}

export default App;
