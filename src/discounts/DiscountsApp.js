import React from 'react'
import DiscountsList from './DiscountsList.js'
import Navigation from '../utils/Navigation.js'
import { setInterceptor, instance } from '../axios/axios'
import { withCookies } from 'react-cookie'


function DiscoutsApp({cookies}){
    setInterceptor(instance, cookies.cookies.refresh)
    return (
        <React.Fragment>
            <Navigation />
            <DiscountsList />
        </React.Fragment>
    )
}

export default withCookies(DiscoutsApp)