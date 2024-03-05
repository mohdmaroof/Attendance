import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class HROutlet extends Component {
  state = {};
  render() {
    return <Outlet />;
  }
}

export default HROutlet;
