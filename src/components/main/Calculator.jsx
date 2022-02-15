import { useState } from 'react';
import styles from './Calculator.module.css'
import Button from '../buttons/Button'
import Display from '../display/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default function Calculator() {

    const [state, setState] = useState({...initialState})

    function clearMemory(){
        setState({...initialState})
    };

    function setOperation (operation) {
        console.log('operacao',operation)
    };

    function addDigit (n) {
         if (n === '.' && state.displayValue.includes('.')){
             return
         }

         const clearDisplay = state.displayValue === '0' ||
         state.clearDisplay

         const currentValue = clearDisplay ? '' : state.displayValue
         const displayValue = currentValue + n
         setState({displayValue, clearDisplay: false})

         if(n !== '.'){
             const i = state.current
             const newValue = parseFloat(displayValue)
             const values = [...state.values]
             values[i] = newValue
             setState({ values });
             console.log(values)
         }
    };

    return (
        <div className={styles.calculator}>
            <Display value={state.displayValue}/>
            <Button label="AC" click={() => clearMemory()} triple/>
            <Button label="/" click={() => setOperation("/")} operation/>
            <Button label="7" click={() => addDigit("7")}/>
            <Button label="8" click={() => addDigit("8")}/>
            <Button label="9" click={() => addDigit("9")}/>
            <Button label="*" click={() => setOperation("*")} operation/>
            <Button label="4" click={() => addDigit("4")}/>
            <Button label="5" click={() => addDigit("5")}/>
            <Button label="6" click={() => addDigit("6")}/>
            <Button label="-" click={() => setOperation("-")} operation/>
            <Button label="1" click={() => addDigit("1")}/>
            <Button label="2" click={() => addDigit("2")}/>
            <Button label="3" click={() => addDigit("3")}/>
            <Button label="+" click={() => setOperation("+")} operation/>
            <Button label="0" click={() => addDigit("0")} double/>
            <Button label="." click={() => addDigit(".")}/>
            <Button label="=" click={() => setOperation("=")} operation/>
        </div>
    )
}