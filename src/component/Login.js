import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { useRef, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const history = useHistory()

    async function handlerSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed To login")
        }
        setLoading(false)
    }

    return (
        <div>
            <h1>Login</h1>
            <MDBContainer className="singup_boader">
                <MDBRow>
                    <MDBCol md="6">
                        <form onSubmit={handlerSubmit}>
                            <h1 className="h1 text-center mb-4">Log in</h1>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <div className="grey-text">
                                <MDBInput label="Type your email" icon="envelope" type="email" ref={emailRef} validate />
                                <MDBInput label="Type your password" icon="lock" type="password" ref={passwordRef} validate />
                            </div>
                            <div className="text-center">
                                <MDBBtn disabled={loading} type="submit">Login</MDBBtn>
                                <p>Need an account?  <Link to="/Signup">Signup</Link></p>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default Login
