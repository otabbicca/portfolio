import React from "react";
import "./NavbarX.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

let NavbarX = (props) => (

  <div>
    <Navbar color="faded" light expand="md" className="mainNav">
      <NavbarBrand href="/">{props.brand}</NavbarBrand>

      <NavbarToggler onClick={props.toggle}/>

      <Collapse navbar isOpen={props.isOpen}>
        <Nav className="ml-auto" navbar>

          {props.navLinks.map((item, index) => (
            <NavItem key={item.name + index}>
              <NavLink href={item.local}>{item.name}</NavLink>
            </NavItem>
          ))}

        </Nav>
      </Collapse>

    </Navbar>
  </div>
)

export default NavbarX;
