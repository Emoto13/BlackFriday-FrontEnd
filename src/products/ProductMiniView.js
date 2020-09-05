import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ProductMiniView({ props }){
    const { name, original_price, current_price,  discount_percentage, description, url_name } = props
    return <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {description.slice(0, 50)}
                    </Card.Text>
                    <Link to={`/products/${url_name}`}>
                        <Button variant="primary">More Information</Button>
                    </Link>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
                <span>{original_price}</span>
                <span>{current_price}</span>
                <span>{discount_percentage}</span>
            </Card>    
            
            </Col>
}