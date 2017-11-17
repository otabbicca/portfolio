import React from "react";
import "./Main.css";

let Main = (props) => (

  <div className="allArticles">
    <div className="container">
      <div className="row">

        {props.skills.map((item, index) => (
          <div className="col-md-3 skills" key={item.name + index} style={{backgroundImage: `url("${item.imgloc}")`}}>
              <p className="text">{item.name}</p>
          </div>
          ))}

      </div>
    </div>
  </div>
)
export default Main;
