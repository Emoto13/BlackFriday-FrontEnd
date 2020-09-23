import React from 'react'
import Navigation from '../utils/Navigation.js';
import AdminPage from './AdminPage.js';

export default function AdminApp(){
    return (
        <React.Fragment>
            <Navigation />
            <AdminPage />
        </React.Fragment>
    )
}