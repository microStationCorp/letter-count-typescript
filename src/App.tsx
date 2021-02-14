import InputComponent from "./components/InputComponent";
import { useState, useEffect } from "react";
import ResultComponent from "./components/resultComponent";
import { wordCount } from "./controller/CharacterCount";
import { CharacterInterface } from "./controller/interfaces";

function App() {
  const [text, setText] = useState("");
  const [chars, setChars]: [
    chars: CharacterInterface[],
    setChars: Function
  ] = useState([]);

  useEffect(() => {
    setChars(wordCount(text));
  }, [text]);

  return (
    <div>
      <InputComponent setFunc={setText} />
      <ResultComponent chars={chars} />
    </div>
  );
}

export default App;
