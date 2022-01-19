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


class Getinspired extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 

            <div className="" style={{backgroundColor:"#FFF0E5"}}>
            
              <h5>{this.props.right.title}</h5>
              
                  <a href="">{this.props.right.description}</a>
              
            
            </div>
            
         



         );
    }
}
 
export default Getinspired;