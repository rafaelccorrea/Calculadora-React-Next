import styles from './Button.module.css';

export default function Button(props) {
    const operation = props?.operation;
    const double = props?.double;
    const triple = props?.triple;
    
    return (
            <button 
            onClick={e => props.click && props.click(props.label)}
            className={`
                ${styles.button} ${operation ? styles.operation : ""}
                ${styles.button} ${double ? styles.double : ""}
                ${styles.button} ${triple ? styles.triple : ""}
            `}>
                {props.label}
            </button>
    )
}