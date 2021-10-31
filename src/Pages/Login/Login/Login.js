import React from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import './login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth()
    return (
        <Container>
            <div className="login-page">
                <h2>Please Login</h2>
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>

            </div>
        </Container>
    );
};

export default Login;