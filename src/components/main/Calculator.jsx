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
    };

    return (
        <div className={styles.calculator}>
            <Display value={state.displayValue}/>
            <Button label="AC" click={() => clearMemory()} triple/>
            <Button label="/" click={() => setOperation()} operation/>
            <Button label="7" click={() => addDigit()}/>
            <Button label="8" click={() => addDigit()}/>
            <Button label="9" click={() => addDigit()}/>
            <Button label="*" click={() => setOperation()} operation/>
            <Button label="4" click={() => addDigit()}/>
            <Button label="5" click={() => addDigit()}/>
            <Button label="6" click={() => addDigit()}/>
            <Button label="-" click={() => setOperation()} operation/>
            <Button label="1" click={() => addDigit()}/>
            <Button label="2" click={() => addDigit()}/>
            <Button label="3" click={() => addDigit()}/>
            <Button label="+" click={() => setOperation()} operation/>
            <Button label="0" click={() => addDigit()} double/>
            <Button label="." click={() => addDigit()}/>
            <Button label="=" click={() => setOperation()} operation/>
        </div>
    )
}