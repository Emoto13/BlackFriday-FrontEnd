import React from 'react'
import { unique } from '../../utils/functions/uniqueObjectArray'
import ProductOrder from './ProductOrder'

export default function ProductsPopup({ products, idQuantity }){
    const uniqueProducts = unique(products)
    return (
        <React.Fragment>
            { uniqueProducts.map(product => <ProductOrder key={product.name} props={{...product, quantity: idQuantity[product.id] }} />) }
        </React.Fragment>
        )
}