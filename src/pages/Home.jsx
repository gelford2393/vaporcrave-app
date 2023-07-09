import React from "react";
import { BANNERTEXT } from "../config/navMenu";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Juice60 from "./../assets/juice 60.png";
const Home = () => {
  return (
    <Container className="homeLanding">
      <h1 className="bannerText">{BANNERTEXT.toUpperCase()}</h1>
      <hr className="bannerLine" />
      <p className="bannerMessage">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse.
      </p>
      <div className="bannerImg">
        <Image src={Juice60} alt="Juice60" />
      </div>
    </Container>
  );
};

export default Home;
