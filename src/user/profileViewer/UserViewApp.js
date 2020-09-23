import React from 'react'
import Navigation from '../../utils/Navigation'
import UserView from './UserView'

export default function UserViewApp({ match }){
    const { username } = match.params 
    return (
        <React.Fragment>
            <Navigation />
            <UserView username={username} />
        </React.Fragment>
    )
}