
import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInWithGoogle}=useAuth();
    const histroy=useHistory();
    
    return (
        <div className=" login my-5 mx-auto">
            <div className="">
            <h2>Please Login</h2>
            <button onClick={signInWithGoogle} className="btn btn-warning">Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;