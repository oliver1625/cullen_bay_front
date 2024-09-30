import React from "react";
import { Col, Container, Row } from "reactstrap";

import Instagram from "../icons/instagram-brands.svg";
import { Link } from "react-router-dom";
import ContactUs from "./ContactUs";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md="4">
            <p>Cullen Bay, Darwin</p>
          </Col>
          <Col md="4">
            <div className="contact-detail">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <p>Info@cullenbayfishingcharters.com.au</p>
            </div>
            <div className="contact-detail">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <p>0498 271 920</p>
            </div>
            <div className="contact-detail">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 0c17.7 0 32 14.3 32 32l0 34.7C368.4 80.1 431.9 143.6 445.3 224l34.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-34.7 0C431.9 368.4 368.4 431.9 288 445.3l0 34.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7C143.6 431.9 80.1 368.4 66.7 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l34.7 0C80.1 143.6 143.6 80.1 224 66.7L224 32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
              </svg>
              <p>Marina boulevard, Cullen Bay, Darwin, NT</p>
            </div>
          </Col>
          <Col md="4">
            <p>
              <Link to="/home">Home</Link>
            </p>
            <p>
              <Link to="/contact-us">Contact Us</Link>
            </p>
            <p>
              <Link to="/home">About Us</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
