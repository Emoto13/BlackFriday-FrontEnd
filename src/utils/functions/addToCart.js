export const addToCart = (productId) => {
    const cachedCart = localStorage.getItem('cart')
    let productIdQuantityObj = cachedCart ? {...JSON.parse(cachedCart)} : {}

    if (productIdQuantityObj[productId] === undefined){
        productIdQuantityObj[productId] = 1
    } else {
        productIdQuantityObj[productId] += 1
    }
    localStorage.setItem('cart', JSON.stringify(productIdQuantityObj))
    console.log(localStorage.getItem('cart'))
}