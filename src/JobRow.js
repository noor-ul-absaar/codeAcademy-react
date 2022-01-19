import React, { Component } from "react";
import "./JobRow.css";
import code from './codecademy.jpg';
class JobRowComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    
    return (
      
      <div className="jobs-div border-bottom mb-5 ms-lg-1 "  style={{backgroundImage: this.props.right.url ,width :"300px",height:"180px" }}>

         
        <div className="jobs-inner-div" type="button" style={{backgroundColor: "white" ,textAlign:"center",height:"100px"}}>
          <div style={{textAlign:"start"}}>{this.props.right.type}</div>
          <b><p>{this.props.right.title}</p></b>
          <p>{this.props.right.description}</p>
          <div className="ms-5 mt-5" style={{textAlign:"end"}}>{this.props.right.end}</div>
        
        </div>
        
      </div>
    );
  }
}

export default JobRowComponent;
