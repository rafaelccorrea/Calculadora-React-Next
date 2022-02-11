import styles from './Display.module.css';

export default function Display(props) {
    return (
        <div className={styles.display}>
            {props.value}
        </div>
    )
}