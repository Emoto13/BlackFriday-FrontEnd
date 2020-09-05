import React from 'react'
import { Form, Image, Row, Col, Container } from 'react-bootstrap'
import { Countries } from '../utils/constants/countries'

export default function LoggedInUserPage({ user }){
    return (
        <Form>
            <Container>
                <Row>
                    <Col xs={6} md={6}>
                    <Image src={"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"} alt={`${user.username} profile pic`} roundedCircle fluid/>
                    </Col>
                </Row>
            </Container>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder={`Current username is ${user.username}`} defaultValue={user.username} />
            </Form.Group>
            

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder={`Current email is ${user.email}`} defaultValue={user.email} />
            </Form.Group>
            
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Country</Form.Label>
                <Form.Control as="select"  onChange={(e) => console.log(e.target.value)}>
                    <Countries />
                </Form.Control>
            </Form.Group>
            
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows="5" />
            
            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Enter your home address here..." />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Enter second address here..." />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">         
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                   </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form.Row>
            </Form.Group>
        </Form>
    )
}