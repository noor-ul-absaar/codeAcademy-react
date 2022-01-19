import React, { Component } from "react";
import "./FilterComponent.css";

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
    <li><a className="dropdown-item" href="#">{this.props.left.title}</a></li>
    );
  }
}

export default FilterComponent;
