import React from 'react'
import ProductMiniView from './ProductMiniView.js'
import { Row } from 'react-bootstrap'


export default function ProductMiniViewList({ products }){
    if (!products){
        return <div>Loading...</div>       
    } 
    let productsList = products.map(entry => <ProductMiniView props={entry} key={entry.id} />)
    return <Row className="justify-content-md-center">{productsList}</Row>
}