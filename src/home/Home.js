import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Image } from 'semantic-ui-react';
import Navigation from '../utils/Navigation.js'



export default function Home(){
	return (
		<React.Fragment>
		<Navigation />
		<Container fluid>
          	<Row textAlign='center' md={6} xs={3}>
				<Col lg={true}>
					<Image src="https://img.icons8.com/flat_round/64/000000/wedding-dress.png" alt="Women's Fashion" href='/category/WF' circular />		
				</Col>
				<Col lg={true}>
					<Image src="https://img.icons8.com/fluent/64/000000/boy-stroller.png" alt='Baby' href='/category/B' circular style={{"background": 'orange'}}/>
				</Col>			
				<Col lg={true}>
					<Image src="https://img.icons8.com/flat_round/64/000000/suit--v1.png" alt="Man's Fashion" href='/category/MF' circular />
				</Col>
				<Col lg={true}>
					<Image src="https://img.icons8.com/fluent/64/000000/car.png" alt="Automotive" href='/category/A' circular style={{"background": 'yellow'}}/>
				</Col>
				<Col lg={true}>
					<Image src="https://img.icons8.com/color/64/000000/computer-support.png" alt="Computers" href='/category/C' circular style={{"background": 'purple'}}/>
				</Col>
				<Col lg={true}>
					<Image src="https://img.icons8.com/color/64/000000/boy.png" alt="Boy's Fashion" href='/category/BF' circular style={{"background": 'red'}}/>
				</Col>
				<Col lg={true}>
					<Image src="https://img.icons8.com/color/64/000000/girl.png" alt="Girl's Fashion" href='/category/GF' circular style={{"background": 'pink'}}/>
				</Col>
				<Col lg={true}>
					<Image src="https://img.icons8.com/color/64/000000/software-box.png" alt="Software" href='/category/S' circular style={{"background": 'green'}}/>
				</Col>
				<Col lg={true}>
					<Image src="https://img.icons8.com/fluent/64/000000/cottage.png" alt="Real Estate" href='/category/RE' circular style={{"background": 'brown'}}/>
				</Col>
				<Col lg={true}>
					<Image src="https://img.icons8.com/fluent/64/000000/garden-shears.png" alt="House and Garden" href='/category/HG' circular style={{"background": 'blue'}}/>
				</Col>
				<Col lg={true}>
					<Image src="https://img.icons8.com/officel/64/000000/football2--v2.png" alt="Sports, Books, Hobby" href='/category/SBH' circular style={{"background": 'orange'}}/>
				</Col>
				<Col lg={true}>
					<Image src="https://img.icons8.com/cotton/64/000000/automotive-generator.png" alt="Machines, Tools, Equipment" href='/category/MTE' circular style={{"background": 'green'}}/>
				</Col>
			</Row>

		</Container>
		</React.Fragment>
	)
}
