import React from 'react'
import { Form, Image, Row, Col, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom' 
import { Dropdown } from 'semantic-ui-react'

import { COUNTRIES } from '../../utils/constants/countries'

export default function LoggedInUserPage({ reduxUser }){
    const user = reduxUser ? reduxUser : JSON.parse(localStorage.getItem('user'))
    const { is_superuser, is_staff } = user 
    return (
        <Form>
            <Container>
                <Row>
                    <Col xs={6} md={6}>
                        <Image src={"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"} alt={`${user.username} profile pic`} roundedCircle fluid/>
                    </Col>
                </Row>
            </Container>

            { 
                is_staff || is_superuser ? 
                <Link to="/admin">
                    <Button>Go to admin page</Button>
                </Link> :
                <span></span>
            }
            
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder={`Current username is ${user.username}`} defaultValue={user.username} />
            </Form.Group>
            

            <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder={`Current email is ${user.email}`} defaultValue={user.email} />
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

            <Dropdown
            placeholder='Select country'
            fluid
            search
            selection
            options={COUNTRIES}
            onChange={(e, {value})=> console.log(value)}/>
            
            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
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

//function mapDispatchToProps(dispatch){
//    return {
//        getUser: (access) => dispatch(getCurrentUser(access))
//    }
//}
//
//function mapStateToProps(state, ownProps) {
//    return {
//        user: state.user.data, 
//        ...ownProps
//    }
//}

