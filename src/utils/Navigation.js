import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsQuestionCircle, BsHouseDoor, BsPerson } from "react-icons/bs";
import { FaPercent, FaShoppingCart } from "react-icons/fa"
import { TiPhoneOutline } from "react-icons/ti";
import { Input, Menu } from 'semantic-ui-react'
import useWindowDimensions from './windowDimesions.js'
import './Navigation.css'
import Logo from './Logo.js'

// use Navbar from react-bootstrap to make more responsive
export default function Navigation(){
	const [activeIcon, setActiveIcon] = useState()
	useEffect(() => {
		setActiveIcon(window.location.pathname.toLowerCase())
	}, [])

  	const { width } = useWindowDimensions()

    return (
		<Menu stackable borderless >
			{ width > 773 ? <Logo /> : <span></span> }
		  
			<Menu.Menu position='left' className='menu-bar'>
        	    <Menu.Item>
        	        <Input icon='search' placeholder='Search...' />
        	    </Menu.Item>
        	</Menu.Menu>

		<Menu.Menu position="right">
           <Menu.Item
			name='/'
			href='/'
			active={activeIcon === '/'}
			>
				<BsHouseDoor size={'2.5em'}/>
			</Menu.Item>

		  <Menu.Item
			name='/discounts'
			href='/discounts'
			active={activeIcon === '/discounts'}
            >
				<FaPercent size={'2.5em'}/>
			</Menu.Item>
          
		  <Menu.Item
			name='/cart'
			href='/cart'
			active={activeIcon === '/cart'}
            >
				<FaShoppingCart size={'2.5em'} />
		 	</Menu.Item>

		   <Menu.Item
			name='/about'
			href='/about'
			active={activeIcon === '/about'}
            >
				<BsQuestionCircle size={'2.5em'} />
		 	</Menu.Item>

		   <Menu.Item
			name='/contacts'
			href='/contacts'
			active={activeIcon === '/contacts'}
            >
				<TiPhoneOutline size={'2.5em'} />
		 	</Menu.Item>
		
		
		   <Menu.Item
			name='/myprofile'
			href='/myprofile'
			active={activeIcon === '/myprofile'}
			>
				<BsPerson size={'2.5em'} />
		 	</Menu.Item>
		</Menu.Menu>
	</Menu>	
	)
  }


// <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
//				<Navbar.Brand href="/">The BlackFriday Shop</Navbar.Brand>
//				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
//  				<Navbar.Collapse id="responsive-navbar-nav">
//            	<Nav className="mr-auto">
//                    	<Nav.Link href="/"><BsHouseDoor size={'2.2em'} /></Nav.Link>
//                    	<Nav.Link href="/discounts"><FaPercent size={'2.2em'} /></Nav.Link>
//                    	<Nav.Link href="/myprofile"><BsPerson size={'2.2em'} /></Nav.Link>
//                    	<Nav.Link href="/cart"><FaShoppingCart size={'2.2em'} /></Nav.Link>
//                    	<Nav.Link href="/about"><BsQuestionCircle size={'2.2em'} /></Nav.Link>
//                    	<Nav.Link href="/contact"><TiPhoneOutline size={'2.2em'} /></Nav.Link>
//                </Nav>
//				<Form inline>
//           			<FormControl
//           			  type="text"
//           			  placeholder="Search"
//           			  className="mr-sm-2"
//           			/>
//				</Form>
//				</Navbar.Collapse>
//            </Navbar>