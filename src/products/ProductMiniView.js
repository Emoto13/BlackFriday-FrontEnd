import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addToCart } from '../utils/functions/addToCart'

export default function ProductMiniView({ props }){
    console.log(props)
    const {  id, name, original_price, current_price,  discount_percentage, description, url_name, product_images  } = props
    const image = product_images.length > 0 ? `http://127.0.0.1:8000${product_images[0].image}` : ''
    return <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image}/>
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {description.slice(0, 50)}
                    </Card.Text>
                    <Link to={`/products/${url_name}`}>
                        <Button variant="primary">More Information</Button>
                    </Link>
                    <Button variant="primary" onClick={() => addToCart(id)}>Add to cart</Button>
                </Card.Body>
                <span>{original_price}</span>
                <span>{current_price}</span>
                <span>{discount_percentage}</span>
            </Card>    
            </Col>
}