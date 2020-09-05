import React from 'react';
import LoginForm from './LoginForm.js';
import Navigation from '../utils/Navigation.js';
import { connect, } from 'react-redux'
import LoggedInUserPage from './LoggedInUserPage'

function UserPage({ user }){
    const isLoggedIn = user ? user.is_logged_in : false

    return (
    <div>
        <Navigation />
    { isLoggedIn ? <LoggedInUserPage user={user}  /> : <LoginForm/> }
    </div>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user.data, 
    }
}


export default connect(mapStateToProps)(UserPage)