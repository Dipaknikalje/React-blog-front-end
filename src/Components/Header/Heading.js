import React,{Component} from "react";
import "./Header.css";
import Buttons from "../Authorisation/Buttons/Buttons";

class Heading extends Component  {
  constructor(props) {
    super(props)
  
    this.state = {
       auth:0,
    }
  }
  loginHandler=()=>{
    this.setState({auth:!this.state.auth})
  }
  
  render(){
  return (
    <>
      <div className="title_div">
        <p>The</p>
        <h1>Siren</h1>
      </div>
      <Buttons  login={this.loginHandler} status={this.state.auth} />
    </>
  );
}
}

export default Heading;
