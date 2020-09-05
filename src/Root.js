import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Home from './home/Home.js';
import UserPage from './user/UserPage.js';
import DiscountsApp from './discounts/DiscountsApp.js';
import ProductPage from './products/ProductPage.js';



export const Root = ({ store }) => 
            <React.StrictMode>
                <Provider store={store}>
                    <BrowserRouter>
					    <Route exact path="/" component={Home}/>
                        <Route exact path="/myprofile" component={UserPage}/>
                        <Route exact path="/discounts" component={DiscountsApp}/>
                        <Route exact path="/products/:url_name" component={ProductPage} />
				    </BrowserRouter>
                </Provider>
            </React.StrictMode>

Root.propTypes = {
    store: PropTypes.object.isRequired
  }
  