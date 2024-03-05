import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Dashboard/home";
import Login from "../../Authentication/login";
import Register from "../../Authentication/register";
import ForgotPassword from "../../Authentication/forgotpassword";
import NoPage from "../nopage";

class WfmRouter extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}>
              <Route index element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='forgotpassword' element={<ForgotPassword />} />
              <Route path='*' element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default WfmRouter;
