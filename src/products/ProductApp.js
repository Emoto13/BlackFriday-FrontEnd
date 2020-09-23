import React from 'react'
import Navigation from '../utils/Navigation.js'
import ProductPage from './ProductPage.js'

export default function ProductApp(props){
    const url_name = props.match.params.url_name
    return (
        <React.Fragment>
            <Navigation />
            <ProductPage url_name={url_name} />
        </React.Fragment>
    )
}