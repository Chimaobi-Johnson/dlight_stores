import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'


import axios from 'axios';

import styles from './Auth.module.css';
import Modal from '../ui/Modal/Modal';


const Auth = props => {

    const router = useRouter()

    const [responseMessage, setResponseMessage] = useState('')
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    let registerLink = '/auth/register'

    if(router.query.status === 'checkout') {
        registerLink =`/auth/register?status=checkout`;
    }

    const { register, handleSubmit, formState: { errors } } = useForm();


    const fromUrl = '' // get page user came from

    // LOGIN 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = () => {
        let customData = new FormData();
        customData.append('email', email)
        customData.append('password', password)
        setLoading(true)
        const instance = axios.create({
            withCredentials: true
          });
        instance.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/login', customData).then(data => {
            if(data.status === 200) {
                localStorage.setItem('dlight_userId', data.data.user._id);

                          // set one hour expiration time
          const remainingMilliseconds = 60 * 60 * 1000;
          const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
          );
            localStorage.setItem('dlight_expiryDate', expiryDate.toISOString());
            setLoading(false)

          if(router.query.status === 'checkout') {
            router.push('/checkout')
          } else {
            router.push('/')
          }
          }
        }).catch(err => {
            setLoading(false)

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
        if(data.password !== data.confirmPassword) {
            alert('Password does not match')
            return
        }
        setResponseMessage('')
        setLoading(true)
        const formData = new FormData()
        formData.append('firstName', data.firstName)
        formData.append('lastName', data.lastName)
        formData.append('email', data.email)
        formData.append('password', data.password)

        const result = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/register', formData);
        if(result.status === 200 || result.status === 201 ) {
            setLoading(false)

            if(router.query.status === 'checkout') {
                router.push('/checkout')
              } else {
                router.push('/auth/login?status=success')
              }

        } else {
            setLoading(false)
            setResponseMessage('Error creating user. check connection or try again later')
            setModal(true)
        }
    }

    const openModal = () => {
        setModal(!modal)
    }
    
    return (
        <div className={styles.wrapper}>
                  <Modal openModal={openModal} open={modal}>
                    {responseMessage}
                  </Modal>
            <div className={styles.contentContainer}>
                {props.page === 'login' ? (
                    <>
                        <h1>Login</h1>
                        {router.query.status === 'success' ? (<div className={styles.successInfo}>
                            <p>User created successfully. Please login</p>
                        </div>) : ''}
                        <Input type="email" onChange={(e) => changeLoginTextHandler('email', e)} value={email} placeholder="Email" label="Email" />
                        <Input type="password" onChange={(e) => changeLoginTextHandler('password', e)} value={password} placeholder="Password" label="Password" />
                        <Button onClick={loginHandler} variant="secondary">{loading ? 'Logging user...' : 'SIGN IN'}</Button>
                        <p>Don&apos;t have an account? <Link href={registerLink}>Create account</Link></p>
                        <span>Forgot password? <Link href="/auth/forgot-password">Click here</Link></span>
                    </>
                ) : (
                    <>
                        <h1>Create account</h1>
                        <Input type="text" controlled register={register} placeholder="First Name" inputName="firstName" label="First Name" required minLength={3} />
                        <Input type="text" controlled register={register} placeholder="Last Name" inputName="lastName" label="Last Name" required minLength={3} />
                        <Input type="email" controlled register={register} placeholder="Email" inputName="email" label="Email" required />
                        <Input type="password" controlled register={register} placeholder="Password" inputName="password" label="Password" required minLength={8} />
                        <span style={{ marginBottom: '1rem', display: 'block' }}>Password must not be less than 8 characters</span>
                        <Input type="password" controlled register={register} placeholder="Confirm Password" inputName="confirmPassword" label="Confirm Password" required />
                        <Button onClick={handleSubmit(registerUser)} variant="secondary">{loading ? 'Creating user...' : 'SIGN UP'}</Button>
                        <p>Already have an account? <Link href="/auth/login">login here</Link></p>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Auth