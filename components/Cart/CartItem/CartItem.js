import Input from '../../ui/Input/Input';
import * as styles from './CartItem.module.css';


const CartItem = props => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>

            </div>
            <div className={styles.contentContainer}>
                <h4>Awesome pots for cooking</h4>
                <span>2.5/6 Packs</span>
                <div className={styles.inputContainer}>
                 <Input type="text" defaultValue={0} label="quantity" />
                </div>
            </div>
        </div>
    )
}

export default CartItem