import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { CookiesProvider } from 'react-cookie';

import Home from './home/Home.js';
import LogInUserPage from './user/login/LogInUserPage.js';
import DiscountsApp from './discounts/DiscountsApp.js';
import ProductApp from './products/ProductApp.js';
import AdminApp from './admin/AdminApp.js';
import UserViewApp from './user/profileViewer/UserViewApp.js';
import UploadProductApp from './admin/products/upload/UploadProductApp.js';
import SignUpApp from './user/sign_up/SignUpApp.js';
import CategoryApp from './category/CategoryApp.js';


const isStaffAuth = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user ? user.is_staff : false
}

const RequireStaffAuth = ({ children }) => {
    const restricted = ['/admin', '/upload/product']
    const pathName = window.location.pathname 
 
    const isStaff = isStaffAuth()
    if (isStaff) {
        return children
    } else if (!isStaff && restricted.includes(pathName)){
        return <Redirect exact to="/myprofile" />
    } 
    return children
}

export const Root = ({ store }) => 
            <React.StrictMode>
                <CookiesProvider>
                    <Provider store={store}>
                        <BrowserRouter>
				    	    <Route exact path="/" component={Home}/>
                            <Route exact path="/myprofile" component={LogInUserPage}/>
                            <Route exact path="/discounts" component={DiscountsApp}/>
                            <Route exact path="/products/:url_name" component={ProductApp} />
                            <Route exact path="/users/:username" component={UserViewApp} />
                            <Route exact path="/sign-up" component={SignUpApp} />
                            <Route exact path="/category/:category" component={CategoryApp} />

                            <RequireStaffAuth>
                                <Route exact path="/admin" component={AdminApp} />
                                <Route exact path="/upload/product" component={UploadProductApp} />
                            </RequireStaffAuth>
                        
                        </BrowserRouter>
                    </Provider>
                </CookiesProvider>
            </React.StrictMode>

Root.propTypes = {
    store: PropTypes.object.isRequired
  }
  