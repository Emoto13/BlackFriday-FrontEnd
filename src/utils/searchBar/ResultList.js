import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'

export default function ResultList({ users }){
    if (!users){
        return <React.Fragment>No results yet.</React.Fragment>
    }
    const usersList = users.map(user => {
    const { username, first_name, last_name, profile_image} = user
    return ( 
        <React.Fragment>
            <div>
                <span>{username}</span>
            </div>
            <span>{`${first_name} ${last_name}`}</span>
            <Image src={profile_image} href={`users/${username}/`} alt={username}/>
            <hr />
        </React.Fragment>
    )})
    return (
        <React.Fragment>
            {usersList}
        </React.Fragment>
    )
}