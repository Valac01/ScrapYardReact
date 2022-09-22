import React from 'react'
import {Navbar,Nav,Container,Button, Dropdown, NavDropdown} from "react-bootstrap";
import { IoIosArrowDown } from 'react-icons/io';
import { Link,Outlet } from "react-router-dom"; 
// import ContextCart from '../Component/ContextCart';
import Cart from './Dump';

const Header = () => {
    return (
        <>
             <Navbar style={{backgroundColor:"#36822f"}} variant="dark">
        <Container>
          <Navbar.Brand href="/">ScrapYard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/individual">Individual</NavDropdown.Item>
              <NavDropdown.Item href="/industry">Industry</NavDropdown.Item>
              <NavDropdown.Item href="/society">Society</NavDropdown.Item>
            
            </NavDropdown>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="LoginAndSignUp">
           <Button as={Link} to="/logi" style={{backgroundColor:"#fff", color:"black", margin:"5px"}}>Login</Button>
           <Button as={Link} to="/signup" style={{backgroundColor:"#fff", color:"black", margin:"5px"}}>SignUp</Button>
          </Nav>
          <Nav.Link as={Link} to="/dump">
          <Cart/>
          </Nav.Link>
        </Container>
      </Navbar>
       <Outlet/>
      
    </>
                

  )
}

export default Header