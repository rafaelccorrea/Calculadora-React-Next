import styles from './Button.module.css';

export default function Button(props) {
    let classes = styles.button
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <div>
            <button className={classes}>
                {props.label}
            </button>
        </div>
    )
}