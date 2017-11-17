import React from "react";
import NavbarX from "./NavbarX.js";

class NavbarXContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return (
      <NavbarX {...this.props} toggle={this.toggle} isOpen={this.state.isOpen}/>
    )
  }
}
export default NavbarXContainer;
