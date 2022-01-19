import React, { Component } from "react";
import FilterComponent from "./FilterComponent";
import JobRowComponent from "./JobRow";
import "./BaseComponent.css";
import data from "./data/job.json";
import left from "./data/left.json"
import right from "./data/right.json"
import axios from "axios";
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SearchComponent from "./Search_Compnent";

class LeftComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: [],data2:[]};
  }

    render() { 
        return(

            <div className="col-lg-3 d-none d-lg-block  ms-5">
          <a className="dropdown " style={{backgroundColor:"#FFF0E5"}}>
                <button class="btn btn-light dropdown-toggle" style={{backgroundColor:"#FFF0E5"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                  Languages
                </button>
                <ul class="dropdown-item" aria-labelledby="dropdownMenuButton1" >

              {this.state.data.map((val) => {
              return (
               
                  <FilterComponent left={val} />
                
              );
                 })}
            </ul>
            </a>
            <div className="dropdown" style={{backgroundColor:"#FFF0E5"}}>
                <button class="btn btn-light dropdown-toggle" style={{backgroundColor:"#FFF0E5"}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="true">
                  Subjects
                </button>
                <ul className="dropdown-item" aria-labelledby="dropdownMenuButton1" >

              {this.state.data.map((val) => {
              return (
               
                  <FilterComponent left={val} />
                
              );
                 })}
            </ul>
            </div>

          </div>

        );
    }
    componentDidMount() {
      this._isMounted = true;
      console.log("inside componentDidMount");
      // write code to fetch data from server
      axios({
        url: "http://localhost:3001/getJobs2",
        method: "GET",
      })
        .then((response) => {
          console.log(response.data);
          console.log("languages data");
          console.log(response.data.languages);
          this.setState({ data: response.data.languages,data2:response.data.subjects });
        })
        .catch((err) => {
          console.log(err);
        });
        
        /*
      axios({
        url: "http://localhost:3001/postJob",
        method: "POST",
        params: { ID: 3, title: "Networks Course" },
      });
      */
    }
  

}
 
export default LeftComponent;