import React from 'react';
import Login from './Login.js';
import { Link } from "react-router-dom";


export default function LoginForm(props){
    return <div>
        <Login />
        <Link to="/sign-up">
            Sign up
        </Link>
        <br />
        <Link to="/forgotten-password">
            Forgotten password?
        </Link>
    </div>
}