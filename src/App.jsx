import { StrictMode, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
function App() {
  !StrictMode;
  const [input, setInput] = useState("");
  const [ans, setAns] = useState(0);
  const [output, setOutput] = useState(0);
  const [result, setResult] = useState(0);
  const Expression = (event) => {
    const currentInput = event.target.textContent;
    const previeusInput = input;
    if (input.length == 0) {
      //do nothing
    }
    setInput(previeusInput + currentInput);
  };
  const calculate = () => {
    //we have operator in lastQueue
    const lastOperator = /.(+*)$/g;
    if (input.match(lastOperator)) {
      const newInput = input.replace(lastOperator, "");
      console.log(newInput);
    }
    console.log(input);
  };
  return (
    <>
      <div className="container">
        <div id="calculator">
          <div id="display" style={{ textAlign: "right" }}>
            {input}
          </div>
          <button id="clear" onClick={Expression} className="light-gray">
            C
          </button>
          <button id="ac" onClick={Expression} className="light-gray">
            Del
          </button>
          <button id="percentage" onClick={Expression} className="light-gray">
            %
          </button>
          <button id="divide" onClick={Expression} className="light-gray">
            /
          </button>
          <button id="seven" onClick={Expression} className="light-gray">
            7
          </button>
          <button id="eight" onClick={Expression} className="light-gray">
            8
          </button>
          <button id="nine" onClick={Expression} className="light-gray">
            9
          </button>
          <button id="multiply" onClick={Expression} className="light-gray">
            *
          </button>
          <button id="four" onClick={Expression} className="light-gray">
            4
          </button>
          <button id="five" onClick={Expression} className="light-gray">
            5
          </button>
          <button id="six" onClick={Expression} className="light-gray">
            6
          </button>
          <button id="subtract" onClick={Expression} className="light-gray">
            -
          </button>
          <button id="one" onClick={Expression} className="light-gray">
            1
          </button>
          <button id="two" onClick={Expression} className="light-gray">
            2
          </button>
          <button id="three" onClick={Expression} className="light-gray">
            3
          </button>
          <button id="add" onClick={Expression} className="light-gray">
            +
          </button>
          <button id="zero" onClick={Expression} className="light-gray">
            0
          </button>
          <button id="decimal" onClick={Expression} className="light-gray">
            .
          </button>
          <button id="equals" onClick={calculate} className="light-gray">
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
