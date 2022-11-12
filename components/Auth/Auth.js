import Link from 'next/link';
import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import styles from './Auth.module.css';


const Auth = props => {
    

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
                        <Input type="text" placeholder="First Name" label="First Name" />
                        <Input type="text" placeholder="Last Name" label="Last Name" />
                        <Input type="email" placeholder="Email" label="Email" />
                        <Input type="password" placeholder="Password" label="Password" />
                        <Input type="password" placeholder="Confirm Password" label="Confirm Password" />
                        <Button variant="secondary">SIGN UP</Button>
                        <p>Already have an account? <Link href="/auth/login">login here</Link></p>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Auth