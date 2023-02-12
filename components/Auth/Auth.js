import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';

import axios from 'axios';

import styles from './Auth.module.css';


const Auth = props => {

    const [inputData, setInputData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const changeTextHandler = (inputText, e) => {
        setInputData(prevState => {
            return {
                ...prevState,
                [inputText]: e.target.value
            }
        })
    }

    const registerUser = async () => {
        if(inputData.password !== inputData.confirmPassword) {
            alert('Password does not match')
            return
        }
        const formData = new FormData()
        formData.append('firstName', inputData.firstName)
        formData.append('lastName', inputData.lastName)
        formData.append('email', inputData.email)
        formData.append('password', inputData.password)

        const result = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/register', formData);
        if(result.status === 200 || result.status === 201 ) {
            alert('User created successfully')
            setInputData(prevState => {
                return {
                    ...prevState,
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            })
        } else {
            alert('Error')
            console.log(result)
        }
    }
    

    return (
        <div className={styles.wrapper}>
            <div className={styles.contentContainer}>
                {props.page === 'login' ? (
                    <>
                        <h1>Login</h1>
                        <Input type="email" placeholder="Email" label="Email" />
                        <Input type="password" placeholder="Password" label="Password" />
                        <Button variant="secondary">SIGN IN</Button>
                        <p>Don&apos;t have an account? <Link href="/auth/register">Create account</Link></p>
                        <span>Forgot password? <Link href="/auth/register">Click here</Link></span>
                    </>
                ) : (
                    <>
                        <h1>Create account</h1>
                        <Input type="text" value={inputData.firstName} onChange={(e) => changeTextHandler('firstName', e)} placeholder="First Name" label="First Name" />
                        <Input type="text" value={inputData.lastName} onChange={(e) => changeTextHandler('lastName', e)} placeholder="Last Name" label="Last Name" />
                        <Input type="email" value={inputData.email} onChange={(e) => changeTextHandler('email', e)} placeholder="Email" label="Email" />
                        <Input type="password" value={inputData.password} onChange={(e) => changeTextHandler('password', e)} placeholder="Password" label="Password" />
                        <Input type="password" value={inputData.confirmPassword} onChange={(e) => changeTextHandler('confirmPassword', e)} placeholder="Confirm Password" label="Confirm Password" />
                        <Button onClick={registerUser} variant="secondary">SIGN UP</Button>
                        <p>Already have an account? <Link href="/auth/login">login here</Link></p>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Auth