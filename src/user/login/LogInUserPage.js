import React from 'react'
import { connect, } from 'react-redux'

import LoggedInUserPage from './LoggedInUserPage'
import LoginForm from './LoginForm.js'
import Navigation from '../../utils/Navigation.js'

function LogInUserPage({ user }){
    const isLoggedIn = user ? user.is_logged_in : false
    const cachedUser = localStorage.getItem('user') ? true : false


    return (
    <div>
        <Navigation />
    { cachedUser || isLoggedIn  ? <LoggedInUserPage reduxUser={user} /> : <LoginForm /> }
    </div>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user.data, 
    }
}


export default connect(mapStateToProps)(LogInUserPage)