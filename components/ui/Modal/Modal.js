import * as styles from './Modal.module.css';
import Button from '../Button/Button';


const Modal = props => {
    const { open, openModal } = props;
    const displayModal = () => {
        if(open) {
            return (
                <div className={styles.wrapper}>
                <div className={styles.modalContainer}>
                    {props.children}
                    <div className={styles.actionsContainer}>
                        <Button onClick={openModal}>Close</Button>
                    </div>
                </div>
            </div>
            )
        }
        return <></>
    }
    return (
        <div>
         {displayModal()}
        </div>
    )
}

export default Modal