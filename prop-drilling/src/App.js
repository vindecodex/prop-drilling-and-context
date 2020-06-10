import React, { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [output, setOutput] = useState("");
  const [outputList, setOutputList] = useState([]);

  const states = {
    output,
    outputList
  };

  const events = {
    _setOutput: text => {
      setOutput(text);
    },
    _setOutputList: text => {
      setOutputList([...outputList, text]);
      setOutput("");
    }
  };

  return <Form state={states} eventHandler={events} />;
};

export default App;
