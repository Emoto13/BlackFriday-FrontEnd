import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsQuestionCircle, BsHouseDoor, BsPerson } from "react-icons/bs";
import { FaPercent, FaShoppingCart } from "react-icons/fa"
import { TiPhoneOutline } from "react-icons/ti";
import { Input, Menu, Popup, } from 'semantic-ui-react'
import useWindowDimensions from './windowDimesions.js'
import './Navigation.css'
import Logo from './Logo.js'
import CartPopup from '../cart/CartPopup'
import { connect } from 'react-redux';
import { searchUsers } from '../redux/user/actions.js';
import ResultList from './searchBar/ResultList.js';

// var (not let) outside of the component because its for a timeout function, which should be cleared
var timeOut;

// TODO FINISH RESULT LIST
function Navigation({ users, searchUsers }){
	const [activeIcon, setActiveIcon] = useState()
	const [searchBarinput, setSearchBarinput] = useState()


	const timeOutFunction = function executeTimeout(){
		clearTimeout(timeOut)
		timeOut = setTimeout(function awaitSearch(){
			searchUsers(searchBarinput)
		}, 1300)
	}

	useEffect(() => {
		setActiveIcon(window.location.pathname.toLowerCase())
	}, [])



  	const { width } = useWindowDimensions()
    return (
		<Menu stackable borderless >
			{ width > 773 ? <Logo /> : <span></span> }
		  
			  
		<Popup  on='focus' 
				trigger={
					<Menu.Item>
						<Input
						type="search" 
						placeholder='Search...'
						icon={{ name: 'search'}} 
						onChange={(e, { value }) => {
							setSearchBarinput(value)
							timeOutFunction() 
						}}
						/>
					</Menu.Item>
			}
			flowing
			hideOnScroll
			hoverable
			basic
			>
				<ResultList users={users} />
			</Popup>
	
						

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
          
		   <Popup
			trigger={	  
				<Menu.Item
				name='/cart'
				active={activeIcon === '/cart'}
				>
					<FaShoppingCart size={'2.5em'} />
				</Menu.Item>
			}
			flowing hoverable
			>
				<CartPopup />
			</Popup>

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

function mapStateToProps(state, props){
    return {
        users: state.searchedUsers.data,
		...props
    }
}

function mapDispatchToProps(dispatch){	
	return {
        searchUsers: (username) => dispatch(searchUsers(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)