import styles from '../styles/Home.module.css'
import Head from 'next/head';
import { app } from '../firebaseConfig';
import { useEffect } from 'react';
import {
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Register() {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                console.log(response.user)
                sessionStorage.setItem('Token', response.user.accessToken);
                router.push('/home')
            })
            .catch(err => {
                alert('Cannot Log in')
            })
    }

    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((response) => {
                sessionStorage.setItem('Token', response.user.accessToken)
                console.log(response.user)
                router.push('/home')
            })
    }

    const signUpWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((response) => {
                sessionStorage.setItem('Token', response.user.accessToken)
                console.log(response.user)
                router.push('/home')
            })
    }

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if(token){
            router.push('/home')
        }
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Login Med</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Login</h1>

                <input
                    placeholder='Email'
                    className={styles.inputBox}
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    type='email'
                />
                <input
                    placeholder='Password'
                    className={styles.inputBox}
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    type='password'
                />

                <button
                    className={styles.button}
                    onClick={signUp}
                >Sign In</button>
                <hr />
                <button
                    className={styles.googleAlt}
                    onClick={signUpWithGoogle}>
                    Sign Up with Google
                </button>
                <hr />
                <button
                    onClick={signUpWithGithub}
                    className={styles.googleAlt}>
                    Sign Up with Github
                </button>
            </main>
        </div>
    )
}