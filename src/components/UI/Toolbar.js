import React from "react";
import { Link } from "react-router-dom";
const ToolBar = props => (
  <nav>
    <ul class="nav_links">
      <li>
        <Link to="/">
          <img
            className="imageFooter"
            src={require("../../Images/homeIcon.png")}
            alt="homeButton"
          />{" "}
        </Link>
      </li>
      <li>
        <Link to="/cities"> Cities</Link>
      </li>
      <li>
        <Link to="/cities"> Cities</Link>
      </li>
    </ul>
  </nav>
);

export default ToolBar;
