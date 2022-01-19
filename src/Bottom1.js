import React, { Component } from 'react';
import "./BaseComponent.css";
import data from "./data/job.json";
import left from "./data/left.json"
import right from "./data/right.json"

import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SearchComponent from "./Search_Compnent";



class Bottom1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="col-lg-3 justify-content-evenly" >
            <div className="jobs-div border-bottom mb-5 ms-lg-1 "  style={{backgroundImage: this.props.right.url ,width :"300px",height:"180px" }}>
           
            </div>
            {this.props.right.title}
            <h4><a href="">{this.props.right.description}</a></h4>
            </div>
            

         );
    }
}
 
export default Bottom1;