import { useEffect, useState } from 'react'
import * as styles from './Confirmation.module.css'
import { useDispatch } from 'react-redux'
import { clearCartItems } from '../../store/actions/app'
import { updateUserCart } from '../../store/actions/user'

const ConfirmationPage = () => {
    const [confirmationMessage, setConfirmationMessage] = useState('Payment confirmed. Thank you for your purchase')
    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get('status');
    const dispatch = useDispatch()
    useEffect(() => {
        if(param === 'success') {
            setConfirmationMessage('Order placed, thanks! <br> Confirmation will be sent to your email')
            dispatch(clearCartItems())
            dispatch(updateUserCart([], [])) // clear user cart
        } else {
            setConfirmationMessage('Payment failed. Check connection or try again later')
        }
    }, [dispatch])

    return (
        <div className={styles.wrapper}>
            <p>{confirmationMessage}</p>
        </div>
    )
}

export default ConfirmationPage