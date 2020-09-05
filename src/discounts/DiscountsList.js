import React, { useEffect } from 'react'
import { getProducts } from '../redux/products/actions.js'
import { connect } from 'react-redux'
import ProductMiniView from '../products/ProductMiniView.js'

function DiscountsList({ getProducts, products }){
    useEffect(() => {
        async function awaitProducts(){
            await getProducts(true, '')
        }
        awaitProducts()
    }, [])
    
    return ( 
    <div> 
        Should render a list of product mini views
    </div> )
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