import React from "react";
import "./Banner.css";

let Video = (props) => {
  return (
    <video className="video" autoPlay loop >
      <source src={props.videoUrl}  type={props.type} />
    </video>
  );
}
export default Banner;


// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state ={
//       videoUrl: "https://coverr.co/s3/mp4/Border-Collies.mp4",
//       type: "video/mp4"
//     }
//   }
//
//   render(){
//     return (
//       <div>
//         <Menu />
//          <Title title="Adopt A Dog Today" />
//
//
//       </div>
//
//      )
//   }
// }
