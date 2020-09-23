import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCurrentProduct } from '../redux/products/actions.js'
import { makeOrder } from '../redux/orders/actions.js'
import { Button } from 'react-bootstrap'
import { addToCart } from '../utils/functions/addToCart.js'

function ProductPage({ getProduct, url_name, product, makeOrder }){
    useEffect(() => {
        async function awaitProduct(){
            await getProduct(url_name)
        }
        awaitProduct()
    }, [getProduct, url_name])   

    
    if (!product){
        return <div>Loading....</div>
    }
    

    const { id, name, description, original_price, current_price, discount_percentage, category, upload_date, in_store, country, city, product_images  } = product
    //const { access } = cookie
    //const handleOrderClick = (access, name, additionalInfo) => makeOrder(access, name, additionalInfo)
   

    return (
        <React.Fragment>
            <header>
                {name}
            </header>
            <span>{upload_date}</span>
            <p>
                {description}
            </p>
            <div>
                <span>{original_price}</span>
                <span>{current_price}</span>
                <span>{discount_percentage}</span>
            </div>
            <span>{category}</span>
            <span>{in_store}</span>
            <span>{country}</span>
            <span>{city}</span>
            <span></span>
            <Button onClick={() => addToCart(id)}>To cart</Button>
        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch){
    return {
        getProduct: (url_name) => dispatch(getCurrentProduct(url_name)),
        makeOrder: (token, name, additionalData) => dispatch(makeOrder(token, name, additionalData))
    }
}

function mapStateToProps(state, ownProps){
    const product = state.currentProduct.data
    return { product, ...ownProps }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)