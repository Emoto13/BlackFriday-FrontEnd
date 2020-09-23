import React, { useEffect } from 'react'
import { getProducts } from '../redux/products/actions.js'
import { connect } from 'react-redux'
import ProductMiniViewList from '../products/ProductMiniViewList.js'
import { Container } from 'react-bootstrap'
import Navigation from '../utils/Navigation.js'


function CategoryApp({ getProducts, products, match }){
    const { category } = match.params
    useEffect(() => {
        async function awaitProducts(){
            await getProducts(false, category)
        }
        awaitProducts()
    }, [getProducts, category])

    return ( 
    <React.Fragment>
        <Navigation />
        <Container> 
            <ProductMiniViewList products={products} />    
        </Container> 
    </React.Fragment>
)

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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryApp)