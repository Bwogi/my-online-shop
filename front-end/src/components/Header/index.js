import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>
						<i
							style={{ color: 'orange', fontSize: '1em' }}
							className='fa-brands fa-slideshare'></i>
						{/* <Logo /> */}
						<i
							style={{ color: 'yellow', paddingRight: 10 }}
							className='fa-solid fa-leaf'></i>
						My Online Shop
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav style={{ marginLeft: 'auto' }}>
							<Nav.Link href='/cart'>
								<i className='fa fa-shopping-cart'></i> Cart
							</Nav.Link>
							<Nav.Link href='/login'>
								<i className='fa fa-user'></i> Sign In
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
