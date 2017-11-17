import React from "react";
import Navbar from "./components/Navbar"
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About"
import Footer from "./components/Footer"
import Banner from "./components/Banner"
// import NavbarX from "./components/NavbarX"

let navLinks = [
{
  name: "Home",
  local: "http://www.google.com"
},
{
  name: "Languages",
  local: "http://www.google.com"
},
{
  name: "Frameworks",
  local: "http://www.google.com"
},
{
  name: "Contact",
  local: "http://www.google.com"
}
];

let skills = [
  {
    name: "Bootstrap",
    imgloc: "/img/skills/bootstrap1.png"
  },
  {
    name: "Chai",
    imgloc: "/img/skills/chai1.png"
  },
  {
    name: "CSS",
    imgloc: "/img/skills/css1.png"
  },
  {
    name: "D3",
    imgloc: "/img/skills/d3-1.png"
  },
  {
    name: "HTML",
    imgloc: "/img/skills/html1.png"
  },
  {
    name: "Javascript",
    imgloc: "/img/skills/js1.png"
  },
  {
    name: "Mocha",
    imgloc: "/img/skills/mocha11.png"
  },
  {
    name: "MongoDB",
    imgloc: "/img/skills/mongodb1.png"
  },
  {
    name: "Node",
    imgloc: "/img/skills/nodejs1.png"
  },
  {
    name: "React",
    imgloc: "/img/skills/react1.png"
  },
  {
    name: "Resposive",
    imgloc: "/img/skills/responsive1.png"
  },
  {
    name: "Wordpress",
    imgloc: "/img/skills/wordpress1.png"
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand="Omar K. T." links={navLinks}/>
        {/* <NavbarX brand="Be Happy" navLinks={navLinks}/> */}
        <Header />
        <About />
        <Main skills={skills} head="Skills"/>
        <Footer />
        <Banner className="video" videoUrl = {this.state.videoUrl} type =   {this.state.type}/>
      </div>
    )
  }
}

export default App;
