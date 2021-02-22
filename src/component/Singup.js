import React, { useRef, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { Alert } from 'react-bootstrap'
import useAuth from '../contexts/AuthContext'
import './Singup.css'



const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmRef = useRef();
    const { singup } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordRef.confirmRef.current.value) {

            return setError('Password do not match')

        } try {

            setError('')
            setLoading(true)

            await singup(emailRef.current.value, passwordRef.current.value)

        } catch {

            setError('fail to craete account')

        }

        setLoading(false)
    }

    return (

        <MDBContainer className="singup_boader">
            <MDBRow>
                <MDBCol md="6">
                    <form onSubmit={handleSubmit}>
                        <h1 className="h5 text-center mb-4">Sign in</h1>
                        {error && <Alert varient="danger">{error}</Alert>}
                        <div className="grey-text">
                            <MDBInput label="Type your name" icon="user" group ref={nameRef} type="text" validate error="wrong"
                                success="right" />
                            <MDBInput label="Type your email" icon="envelope" group ref={emailRef} type="email" validate error="wrong"
                                success="right" />
                            <MDBInput label="Type your password" icon="lock" ref={passwordRef} type="password" validate />
                            <MDBInput label="Type your RE-password" icon="lock" ref={confirmRef} type="password" validate />
                        </div>
                        <div className="text-center">
                            <MDBBtn type="summit" disabled={loading}>Login</MDBBtn>
                            <p>Alerady Have an account? Log In</p>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        );
};

export default Signup;