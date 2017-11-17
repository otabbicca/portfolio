import React from "react";
import "./Navbar.css";
import { Adinkra } from "react-adinkra"

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Adinkra className="adikra2" name={'nkyinkyim'}/><a className="navbar-brand" href="https://www.google.com.gh/"> {this.props.brand}</a><Adinkra className="adikra2" name={'nkyinkyim'}/>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              {this.props.links.map((item, index) => (
                <a className="nav-item nav-link" href={item.local + index} key={item.name + index}>{item.name}</a>
                )
              )}
            </div>
          </div>
      </nav>
    )
  }
}
export default Navbar;
