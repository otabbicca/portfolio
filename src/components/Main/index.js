import React from "react";
import Main from "./Main.js";

class MainContainer extends React.Component {
  render() {
    return (
      <Main {...this.props} />
    )
  }
}

export default MainContainer;
