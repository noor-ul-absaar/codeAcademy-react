import React, { Component } from "react";
import axios from "axios";

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    console.log("inside component did mount");
    axios({
      method: "POST",
      baseURL: "http://localhost:3000",
      url: "/postJob",
      params: { ID: 123 },
    })
      .then((response) => {
        console.log("Data received 111");
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      })
      .catch(() => {
        console.log("Error fetching data");
      });
  }

  render() {
    return <div></div>;
  }
}

export default Jobs;
