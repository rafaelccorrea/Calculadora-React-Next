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
        if( state.current === 0){
            setState({operation, current: 1, clearDisplay:true})
        }else {
            const equals = operation === "="
            const currentOperation = state.operation
            const values = [state.operation]
            
            try{
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            }catch(e){
                values[0] = state.values[0]
            }
            
            values[1] = 0

            setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    };

    function addDigit (n) {
         if (n === '.' && state.displayValue.includes('.')){
             return
         }

         const clearDisplay = state.displayValue === '0' || state.clearDisplay,
               currentValue = clearDisplay ? '' : state.displayValue,
               displayValue = currentValue + n,
               values = [...state.values]
                console.log(values)
               setState({ ...state, displayValue, clearDisplay: false })

         if(n !== '.'){
            const newValue = parseFloat(displayValue),
                values = [state.values]
 
            values[state.current] = newValue
            setState({ ...state, displayValue, clearDisplay: false, values })
        }
    };

    return (
        <div className={styles.calculator}>
            <Display value={state.displayValue}/>
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