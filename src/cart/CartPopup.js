import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { getCartByIds } from '../redux/cart/actions'
import CartProduct from './CartProduct'

function CartPopup({ getCartByIds, cart }){
    const cachedCart  = localStorage.getItem('cart')
    
    useEffect(() => {
        async function awaitCart(){
            const ids = Object.keys(JSON.parse(cachedCart))
            await getCartByIds(ids)
        }
        if (cachedCart){
            awaitCart()
        }
    }, [getCartByIds, cachedCart])   

    if (!cachedCart){
        return <React.Fragment>No products in the cart yet.</React.Fragment>
    }

    if (!cart){
        return <div>Loading...</div>
    }
    
    const cartObject = JSON.parse(cachedCart)
    const cartProducts = cart.map(entry => <CartProduct key={entry.id} props={{...entry, quantity: cartObject[entry.id]}} />)
    return cartProducts
}

function mapStateToProps(state, ownProps){
    return {
        cart: state.cart.data,
        ...ownProps
    }
}

function mapDispatchToProps(dispatch){
    return {
        getCartByIds: (ids) => dispatch(getCartByIds(ids)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPopup)