import axios from "axios";
import React, { Component } from "react";

class Jobs_Class extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    console.log("inside Constructor");
  }
  render() {
    console.log("inside Render");
    let layout = this.state.data.map((obj) => {
      return (
        <div>
          <div>{obj.id}</div>
          <div>{obj.title}</div>
        </div>
      );
    });
    return <div>{layout}</div>;
  }

  componentDidMount() {
    console.log("inside componentDidMount");
    // write code to fetch data from server
    /*axios({
      url: "http://localhost:3001/getJobs",
      method: "GET",
    })
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch((err) => {
        console.log(err);
      });*/
    axios({
      url: "http://localhost:3001/postJob",
      method: "POST",
      params: { ID: 3, title: "Networks Course" },
    });
  }
}

export default Jobs_Class;
