import { useEffect } from 'react'
import * as styles from './Confirmation.module.css'
import { useDispatch } from 'react-redux'
import { clearCartItems } from '../../store/actions/app'

const ConfirmationPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(clearCartItems())
    }, [dispatch])

    return (
        <div className={styles.wrapper}>
            <p>Payment confirmed. Thank you for your purchase</p>
        </div>
    )
}

export default ConfirmationPage