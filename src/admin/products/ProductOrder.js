import React from 'react'
import { Image } from 'semantic-ui-react'

// todo popup of user and products
export default function ProductOrder({ props }){
    const { id, name, product_images, in_store, url_name, country, current_price, quantity } = props
    return (
        <React.Fragment>
            <span>{id}</span>
            <Image href={`products/${url_name}`} src={product_images[0]} alt={url_name} />
            <header>Name: {name}</header>
            <span>In store: {in_store}</span>
            <span>Country: {country}</span>
            <span>Price: {current_price}</span>
            <span>Quantity: {quantity}</span>
            <hr />
        </React.Fragment>
    )     
}
 /*   0:
    country: "BG"
    discount_percentage: "10.00"
    id: 1
    in_store: 100
    name: "Laptop"
    product_images: []*/