import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Image } from 'semantic-ui-react'
import { getUserByUsername } from '../../redux/user/actions'

function UserPopup({ username, getUser, user }){
    useEffect(() => {
        async function awaitUser(){
            await getUser(username)
        }
        awaitUser(username)
    }, [username, getUser])

    if (!user){
        return <div>Loading...</div>
    }

    const { id, products, first_name, last_name, email, profile_image} = user
    return (
        <React.Fragment>
            <div>{id}</div>
            <header>{username}</header>
            <span>{`${first_name} ${last_name}`}</span>
            <span>{email}</span>
            <Image src={profile_image} alt="profile image" />
        </React.Fragment>
    )
}

function mapStateToProps(state, props){
    return {
        user: state.userByUsername.data,
        ...props
    }
}

function mapDispatchToProps(dispatch){
    return {
        getUser: (username) => dispatch(getUserByUsername(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPopup)