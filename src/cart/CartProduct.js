import React, {useEffect} from 'react'
import { useCookies } from 'react-cookie'

export default function CartProduct({ props }){
    const  { id, name, description, current_price, product_images, url_name, quantity } = props
    return (
        <React.Fragment>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
            <div>Description: {description}</div>
            <div>Price: {current_price}</div>
            <div>{url_name}</div>
    {/* Add increment and decrement to ordered AND ADD IMAGESS*/}
            <div>Ordered: {quantity}</div>
            <hr />
        </React.Fragment>
    )
}