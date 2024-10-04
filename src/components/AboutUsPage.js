import React from "react";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import TopView from "../img/top_view.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutUs from "./AboutUs";

//Images
import FamilyFish from "../img/family_fish.jpg";
import BoatImage from "../img/boat.jpg";
import ContactIcon from "../icons/bed-solid.svg";
import useFetch from "../hooks/useFetch";
import ManFish from "../img/GN_fish.jpg";

function AboutUsPage() {
  return (
    <section id="about-us-page">
      <div
        className="about-us-page-hero"
        style={{ background: `url(${TopView})` }}
      >
        <Navbar />
        <h2 className="text-center py-5">About us</h2>
      </div>
      <div className="about-us-page-container container">
        <Row className="mb-5">
          <Col sm={6}>
            <div className="" data-aos="fade-right">
              <h2 className="mb-5">Welcome</h2>
              <p className="text-muted mb-5">
                Cullen Bay Fishing Charters are located in Cullen Bay Darwin NT
                and leaves from the ferry terminal. We specialise in bluewater,
                reef and game fishing. Using local businesses for our catering
                and taking you on an adventure and fishing experience you will
                never forget.
              </p>
            </div>
          </Col>
          <Col sm={6}>
            <div className="" data-aos="fade-left">
              <img src={ManFish} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <div className="" data-aos="fade-left">
              <img src={ManFish} alt="" />
            </div>
          </Col>
          <Col sm={6}>
            <div className="ml-3" data-aos="fade-right">
              <h2 className="mb-5">Lorem ipsum dolor sit amet.</h2>
              <p className="text-muted mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
                sequi? Odio alias, officiis ratione earum recusandae facilis,
                adipisci non qui quas harum provident quae amet veritatis
                similique cupiditate nobis rerum?
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </section>
  );
}

export default AboutUsPage;
