import { useEffect, useState } from 'react'
import * as styles from './Confirmation.module.css'
import { useDispatch } from 'react-redux'

const ConfirmationPage = () => {
    const [confirmationMessage, setConfirmationMessage] = useState('Order placed, thanks!')
    const [subMessage, setSubMessage] = useState('Confirmation will be sent to your email')

    const urlParams = new URLSearchParams(window.location.search);
    const param = urlParams.get('status');
    const dispatch = useDispatch()
    useEffect(() => {
        if(param === 'success') {
            setConfirmationMessage('Order placed, thanks!')
            setSubMessage('Confirmation will be sent to your email')
        } else {
            setConfirmationMessage('An unknown error occurred while processing your order.')
            setSubMessage('Please send us a message at support@delighthomewarestores.com')
        }
    }, [dispatch])

    return (
        <div className={styles.wrapper}>
            <p>{confirmationMessage}<span>{subMessage}</span></p>
        </div>
    )
}

export default ConfirmationPage