import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import { useForm } from "react-hook-form";

import axios from 'axios';

import styles from './Auth.module.css';


const Auth = props => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const fromUrl = '' // get page user came from

    // LOGIN 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        let customData = new FormData();
        customData.append('email', email)
        customData.append('password', password)
        const data = {
            email: email,
            password: password
        }
        axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/login', customData).then(data => {
            console.log(data)
            if(data.status === 200) {
           localStorage.setItem('dlight_frontend_userId', data.data.user._id);

          // set one hour expiration time
          const remainingMilliseconds = 60 * 60 * 1000;
          const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
          );
          localStorage.setItem('dlight_frontend_expiryDate', expiryDate.toISOString());
        //   window.location.pathname = '/'
          }
        }).catch(err => {
            console.log(err)
        })
    }

    const changeLoginTextHandler = (type, e) => {
        if(type === 'email') {
            setEmail(e.target.value)
        } else if(type === 'password') {
            setPassword(e.target.value)
        } else return
    }

    // REGISTER

    const registerUser = async (data) => {
        console.log(data)
        // if(inputData.password !== inputData.confirmPassword) {
        //     alert('Password does not match')
        //     return
        // }
        // const formData = new FormData()
        // formData.append('firstName', inputData.firstName)
        // formData.append('lastName', inputData.lastName)
        // formData.append('email', inputData.email)
        // formData.append('password', inputData.password)

        // const result = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/register', formData);
        // if(result.status === 200 || result.status === 201 ) {
        //     alert('User created successfully')
        //     setInputData(prevState => {
        //         return {
        //             ...prevState,
        //             firstName: '',
        //             lastName: '',
        //             email: '',
        //             password: '',
        //             confirmPassword: ''
        //         }
        //     })
        //     window.location.pathname = '/'

        // } else {
        //     alert('Error')
        //     console.log(result)
        // }
    }
    

    return (
        <div className={styles.wrapper}>
            <div className={styles.contentContainer}>
                {props.page === 'login' ? (
                    <>
                        <h1>Login</h1>
                        <Input type="email" onChange={(e) => changeLoginTextHandler('email', e)} value={email} placeholder="Email" label="Email" />
                        <Input type="password" onChange={(e) => changeLoginTextHandler('password', e)} value={password} placeholder="Password" label="Password" />
                        <Button onClick={loginHandler} variant="secondary">SIGN IN</Button>
                        <p>Don&apos;t have an account? <Link href="/auth/register">Create account</Link></p>
                        <span>Forgot password? <Link href="/auth/forgot-password">Click here</Link></span>
                    </>
                ) : (
                    <>
                        <h1>Create account</h1>
                        <Input type="text" register={register} placeholder="First Name" label="First Name" required />
                        <Input type="text" register={register} placeholder="Last Name" label="Last Name" required />
                        <Input type="email" register={register} placeholder="Email" label="Email" required />
                        <Input type="password" register={register} placeholder="Password" label="Password" required minLength={8} />
                        <Input type="password" register={register} placeholder="Confirm Password" label="Confirm Password" required />
                        <Button onClick={handleSubmit(registerUser)} variant="secondary">SIGN UP</Button>
                        <p>Already have an account? <Link href="/auth/login">login here</Link></p>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Auth