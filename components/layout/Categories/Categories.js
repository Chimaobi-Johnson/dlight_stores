import styles from './Categories.module.css';


const Categories = props => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h2>MAKE SOMEONE HAPPY WITH A GIFT</h2>
            </div>
            <div className={styles.content}>
                <div className={styles.box1}>box one</div>
                <div className={styles.box2}>2</div>
                <div className={styles.box3}>3</div>
                <div className={styles.box4}>4</div>
                <div className={styles.box5}>5</div>
                <div className={styles.box6}>6</div>
            </div>
        </div>
    )
}

export default Categories