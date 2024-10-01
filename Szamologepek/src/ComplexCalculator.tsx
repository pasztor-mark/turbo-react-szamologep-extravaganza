import { useState } from "react";
import Fejlec from "./Fejlec";
import Lablec from "./Lablec";

export function KomplexSzamologep() {
    const szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const [expression, setExpression] = useState("")

    function calculate() {
        setExpression(eval(expression))
    }
  return (
    <>
      <Fejlec cim="Komplex számológép" />
      <section>
        <div className="calculatorBody">
          <div className="display">
            <output>{expression}</output>
          </div>
          <div className="functionButtons">
          <button onClick={() =>{setExpression(`${expression} + `)}}>+</button>
          <button onClick={() =>{setExpression(`${expression} - `)}}>-</button>
          <button onClick={() =>{setExpression(`${expression} * `)}}>*</button>
          <button onClick={() =>{setExpression(`${expression} / `)}}>/</button>
          <button onClick={() =>{setExpression("")}}>C</button>
          </div>
          <div className="calculatorButtons">
            {szamok.map((i) => (
              <button onClick={() =>{setExpression(`${expression}${i}`)}} key={i}>{i}</button>
            ))}
            <button onClick={() =>{setExpression(`${expression}.`)}}>.</button>
            <button onClick={() => {calculate()}}>=</button>
          </div>
        </div>
      </section>
      <p>referencia:</p>
      <img src="https://www.shutterstock.com/image-vector/calculator-vector-icon-260nw-183959492.jpg" alt="" />
      <p>(a belső ami igazán számít)</p>
      <Lablec ido={35} />
    </>
  );
}

export default KomplexSzamologep;
