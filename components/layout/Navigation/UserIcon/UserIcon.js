import * as styles from './UserIcon.module.css';


const UserIcon = props => {
    const firstLetter = props.firstName.split('')[0];
    const secondLetter = props.lastName.split('')[0];
    return (
        <div className={styles.wrapper}>
                <div className={styles.contentContainer}>
                    <h4>{firstLetter + secondLetter}</h4>
                </div>
        </div>
    )
}

export default UserIcon