import React, {useState,useEffect, Component } from "react";
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
import LeftComponent from "./LeftComponent";
import image1 from "./codecademy.jpg";
import image2 from "./Capture10.PNG";
import Getinspired from "./GetInspired";
import bottom from "./Bottom1";
import Bottom1 from "./Bottom1";
import image11 from "./Capture11.JPG";


class BaseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [],data2:[],data3: [],data4:[],data5:[] };
  }

  render() {
    console.log("hello render");
    console.log(this.state.data);
   
    
    
    return (
      <div className="Container" style={{backgroundColor:"#FFF0E5"}}>
        <div className="row ">
            
          <LeftComponent></LeftComponent>

          <div className="col-8 ms-md-5 ms-lg-1">
            <div className="row">
              <SearchComponent></SearchComponent>
            
            </div>

            <div className="col-md-12 d-lg-none btn btn-outline-secondary border border-dark border-2 " >
            catalog menu
          </div>


        <div className="jobs-div border-bottom mb-5"  style={{backgroundImage: `url(${image1})` ,width :"800px",height:"72px" }}> 
        <div className="jobs-inner-div btn btn-link" type="button" style={{textAlign:"center",height:"72px"}}>
         
         <b>not sure where to begin ? take our quiz </b>
          </div>
        </div>

           <h3>
             Most Popular
           </h3>
           
           <div className="row  justify-content-evenly">
            
             { 
             this.state.data.map ( (val) => {
              console.log("inside langaiges map");
              
               return (
               
                  <JobRowComponent className="col-lg-12 col-md-5 " right={val} />
                
              );
            })}
            </div>

            <b><h3>New + Noteworthy</h3></b>
            <div className="border-bottom mb-5 "  style={{backgroundImage: `url(${image2})` ,width :"870px",height:"190px" }}> 
            </div>

            <div className="row  justify-content-evenly">
             
            {this.state.data2.map((val) => {
              return (
               
                  <JobRowComponent className="col-lg-12 col-md-5 " right={val} />
                
              );
            })}
            </div>
            <b><h3>GET INSPIRED</h3></b>
            <div className="row">
            <div className="">
             
            {this.state.data3.map((val) => {
              return (
               
                  <Getinspired className="col-lg-2 col-md-4 " right={val} />
                
              );
            })}
            
            </div>
            </div>

            <div className="row  justify-content-evenly">
             
            {this.state.data4.map((val) => {
              return (
               
                  <Bottom1 className="col-lg-12 col-md-5 " right={val} />
                
              );
            })}
            </div>

           


          </div>
        </div>
      </div>
    );
  }
  
  componentDidMount() {
    this._isMounted = true;
    console.log("inside componentDidMount");
    // write code to fetch data from server
    axios({
      url: "http://localhost:3001/getJobs",
      method: "GET",
    })
      .then((response) => {
        console.log(response.data);
        console.log("languages data");
        console.log(response.data.languages);
        this.setState({ data: response.data.languages,data2: response.data.languages2,data3: response.data.languages3,data4: response.data.languages4});
      })
      .catch((err) => {
        console.log(err);
      });
      ////////////////////////////////////
     
      
    axios({
      url: "http://localhost:3001/postJob",
      method: "POST",
      params: { ID: 3, title: "Networks Course" },
    });
    
  }

}

export default BaseComponent;
