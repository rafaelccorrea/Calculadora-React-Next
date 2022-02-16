import { useState } from 'react';
import styles from './Calculator.module.css'
import Button from '../buttons/Button'
import Display from '../display/Display'

export default function Calculator() {
    const [displayValue, setDisplayValue] = useState("0");
    const [clearDisplay, setClearDisplay] = useState(false);
    const [operationState, setOperationState] = useState(null);
    const [values, setValues] = useState([0, 0]);
    const [current, setCurrent] = useState(0);
   
    function clearMemory() {
      setDisplayValue("0");
      setClearDisplay(false);
      setOperationState("");
      setValues([0, 0]);
      setCurrent(0);
    }
   
    function setOperation(operation) {
      if (current === 0) {
        setOperationState(operation);
        setCurrent(1);
        setClearDisplay(true);
      } else if (current === 1) {
        const equals = operation === "=";
        const currentOperation = operationState;
   
        const clonedValues = [...values];
        const resultOfOperation = clonedValues.reduce((accumulator, current) => {
          if (currentOperation === "+") {
            accumulator += current;
            clonedValues[0] = accumulator;
          } else if (currentOperation === "-") {
            accumulator -= current;
            clonedValues[0] = accumulator;
          } else if (currentOperation === "/") {
            accumulator /= current;
            clonedValues[0] = accumulator;
          } else if (currentOperation === "*") {
            accumulator *= current;
            clonedValues[0] = accumulator;
          }
   
          return accumulator;
        });
   
        values[0] = resultOfOperation;
        values[1] = 0;
   
        setDisplayValue(String(values[0]));
        setOperationState(equals ? null : operation);
        setCurrent(equals ? 0 : 1);
        setClearDisplay(!equals);
        setValues(values);
      }
    }
   
    function addDigit(n) {
      if (n === "." && displayValue.includes(".")) {
        return;
      }
   
      const isDisplayCleaned = displayValue === "0" || clearDisplay;
      const currentValue = isDisplayCleaned ? "" : displayValue;
      const valueOfDisplay = currentValue + n;
      setDisplayValue(valueOfDisplay);
      setClearDisplay(false);
   
      if (n !== ".") {
        const newValue = parseFloat(valueOfDisplay);
        const arrayOfValues = [...values];
        arrayOfValues[current] = newValue;
        setValues(arrayOfValues);
      }
    }

    return (
        <div className={styles.calculator}>
            <Display value={displayValue}/>
            <Button label="AC" click={clearMemory} triple/>
            <Button label="/" click={setOperation} operation/>
            <Button label="7" click={addDigit}/>
            <Button label="8" click={addDigit}/>
            <Button label="9" click={addDigit}/>
            <Button label="*" click={setOperation} operation/>
            <Button label="4" click={addDigit}/>
            <Button label="5" click={addDigit}/>
            <Button label="6" click={addDigit}/>
            <Button label="-" click={setOperation} operation/>
            <Button label="1" click={addDigit}/>
            <Button label="2" click={addDigit}/>
            <Button label="3" click={addDigit}/>
            <Button label="+" click={setOperation} operation/>
            <Button label="0" click={addDigit} double/>
            <Button label="." click={addDigit}/>
            <Button label="=" click={setOperation} operation/>
        </div>
    )
}