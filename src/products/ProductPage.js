import React from 'react'

export default function ProductPage(props){
    if (props.match.params !== {} && !props.product_data) {

    }
    console.log(props)
    return <div>Product Page</div>
}