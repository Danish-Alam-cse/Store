import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

const  Header = () =>{
    return(
        <React.Fragment>

            <Navbar expand="lg" variant="dark" bg="primary">
                <Navbar.Brand>Store</Navbar.Brand>

                <Nav className="ml-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                </Nav>
            </Navbar>
                
        </React.Fragment>
    );
}

export default Header;