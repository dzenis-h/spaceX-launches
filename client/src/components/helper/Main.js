import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logoX.png";

class Main extends Component {
  render() {
    return (
      <div className="d-block justify-content-center">
        <Link to="/">
          <img
            src={logo}
            alt="SpaceX"
            style={{
              width: 300,
              display: "block",
              margin: "auto",
              marginTop: "0.75rem"
            }}
          />
        </Link>
        <div className="text-center">
          <Link to="/launches" className="btn btn-outline-success m-3">
            Launches
          </Link>
          <Link to="/rockets" className="btn btn-outline-danger m-3">
            Rockets
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
