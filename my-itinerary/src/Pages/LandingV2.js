import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Logo from "../components/UI/Logo";
import NavBarV2 from "../components/UI/NavbarV2";
import CarouselSlider from "../components/UI/CarouselSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const LandingPageV2 = props => (
  <React.Fragment>
    <NavBarV2 />
    <div className="container">
      <div>
        <Logo />
      </div>
      <div>
        <h6 className="landingFirstTextV2">
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </h6>
      </div>

      <div>
        <Button
          href="/cities"
          variant="light"
          size="sm"
          className="browse-button"
        >
          <p className="browse-text">
            <strong>Start Browsing</strong>
            <FontAwesomeIcon className="iArrow" icon={faArrowCircleRight} />
          </p>
        </Button>
      </div>

      <div>
        <CarouselSlider />
      </div>
    </div>
  </React.Fragment>
);

export default LandingPageV2;
