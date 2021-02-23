import React, { useRef, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom';

import './Singup.css'



const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    // const { signup, currentUser } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {

            return setError('Password do not match')

        } try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")

        } catch {
            setError('Fail to craete an account')

        }

        setLoading(false)
    }

    return (

        <MDBContainer className="singup_boader">
            <MDBRow>
                <MDBCol md="6">
                    <form onSubmit={handleSubmit}>
                        <h1 className="h1 text-center mb-4">Sign up</h1>
                        {/* {currentUser.email} */}
                        {error && <Alert variant="danger">{error}</Alert>}
                        <div className="grey-text">
                            <MDBInput label="Type your name" icon="user" type="text" ref={nameRef} validate />
                            <MDBInput label="Type your email" icon="envelope" type="email" ref={emailRef} validate />
                            <MDBInput label="Type your password" icon="lock" type="password" ref={passwordRef} validate />
                            <MDBInput label="Type your RE-password" icon="lock" type="password" ref={passwordConfirmRef} validate />
                        </div>
                        <div className="text-center">
                            <MDBBtn disabled={loading} type="submit">Sign up</MDBBtn>
                            <p>Alerady Have an account? <Link to="Login">Log In</Link> </p>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    );
};

export default Signup;