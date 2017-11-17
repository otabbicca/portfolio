import React from "react";
import {Adinkra} from "react-adinkra"
import "./About.css"

class About extends React.Component {
  render() {
    return (
      <div className="About-container mhead">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <Adinkra className="adinkra" name={'nea-onnim-no-sua-a-oh'}/>
            </div>
            <div class="col-md-8">
              <h3>About</h3>
              <p>Hello, many thanks for taking the time to look me up, I am an avid web developer, I was into I.T and Programs for an international NGO, before deciding to follow my passion for coding when the opportunity for a 12 week Vschool bootcamp presented itself. When not challenging myself to learn new things I enjoy time with the family, cooking, catching a game of soccer or time out with friends.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default About;
