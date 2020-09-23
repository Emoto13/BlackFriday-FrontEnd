import React, { useEffect } from 'react'
import { getProducts } from '../redux/products/actions.js'
import { connect } from 'react-redux'
import ProductMiniViewList from '../products/ProductMiniViewList.js'
import { Container } from 'react-bootstrap'

function DiscountsList({ getProducts, products }){
    useEffect(() => {
        async function awaitProducts(){
            await getProducts(false, '')
        }
        awaitProducts()
    }, [getProducts])

    return ( 
    <Container> 
        <ProductMiniViewList products={products} />    
    </Container> )
}

function mapDispatchToProps(dispatch){
    return {
        getProducts: (discounted=false, category='') => dispatch(getProducts(discounted, category))
    }
}

function mapStateToProps(state, ownProps){
    return {
        products: state.productsList.data,
        ...ownProps   
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscountsList)