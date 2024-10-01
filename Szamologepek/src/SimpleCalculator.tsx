import { useState } from "react";
import Fejlec from "./Fejlec";
import Lablec from "./Lablec";
export function EgyszeruSzamologep() {
  const [leftSide, setLeftSide] = useState(0);
  const [rightSide, setRightSide] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);

  function calculate() {
    switch (operator) {
      case "+":
        setResult(leftSide + rightSide);
        break;
      case "-":
        setResult(leftSide - rightSide);
        break;
      case "*":
        setResult(leftSide * rightSide);
        break;
      case "/":
        setResult(leftSide / rightSide);
        break;
    }
  }
  return (
    <>
      <Fejlec cim="Egyszerű számológép" />
      <section>
        <input
          onChange={(e) => {
            setLeftSide(parseInt(e.currentTarget.value));
          }}
          type="number"
          name="left"
          id="left"
        />
        <select
          defaultValue="+"
          onInput={(e) => {
            setOperator(e.currentTarget.value);
          }}
          name="operator"
          id="operator"
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          onChange={(e) => {
            setRightSide(parseInt(e.currentTarget.value));
          }}
          type="number"
          name="right"
          id="right"
        />
      </section>
      <output>{`${leftSide} ${operator} ${rightSide} = ${result}`}</output>{" "}
      <button onClick={() => calculate()}>Számolás</button>
      <Lablec ido={15} />
    </>
  );
}

export default EgyszeruSzamologep;
