import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  ModalBody,
  Row,
  Button,
  Modal,
  Navbar,
} from "reactstrap";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

import HeroImage from "../img/landing_page.jpg";
import ContactIcon from "../icons/bed-solid.svg";

function Booking() {

  return (
    <div>
      {/* <div className="booking-page-img mb-5">
        <img src={HeroImage} alt="" />
        <Button onClick={registerToggle}>Sign Up</Button>
      </div> */}
      <section
        id="home"
        className="hero"
        style={{ background: `url(${HeroImage})` }}
      >
        <Navbar />
        <h2>Welcome to Top End Saltwater Charters</h2>
        <h3>
          Book your Bluewater fishing adventures with Cullen Bay Fishing
          Charters today.
          <br />
          Contact us now below.
        </h3>
        <button>Book Now</button>
      </section>
      {/* <Container className="my-5">
        <h3 className="text-center mb-5">Book a Service</h3>
        <div className="book-service-container">
          <Row>
            <Col sm="3">
              <div className="book-service-card">
                <h5>Contact Us</h5>
                <img src={ContactIcon} alt="" />
              </div>
            </Col>
            <Col sm="3">
              <div className="book-service-card">
                <h5>Contact Us</h5>
                <img src={ContactIcon} alt="" />
              </div>
            </Col>
            <Col sm="3">
              <div className="book-service-card">
                <h5>Contact Us</h5>
                <img src={ContactIcon} alt="" />
              </div>
            </Col>
            <Col sm="3">
              <div className="book-service-card">
                <h5>Contact Us</h5>
                <img src={ContactIcon} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container> */}

    </div>
  );
}

export default Booking;
