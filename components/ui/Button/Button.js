import styles from './Button.module.css';


const Button = props => {
    return (
        <div className={styles.primary}>
            <div className={styles.borderTopLeft}></div>
            <p>{props.children}</p>
            <div className={styles.borderBottomRight}></div>
        </div>
    )
}

export default Button