import React from "react";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import TopView from "../img/top_view.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContactUs() {
  return (
    <section id="contact-us">
      <div className="contact-us-hero" style={{ background: `url(${TopView})` }}>
        <Navbar />
        <h2 className="text-center py-5">Contact us</h2>
      </div>
      <div className="contact-us-container container">
        <Row className="container">
          <Col sm="6" className="">
            <div className="">
              <h2 className="mb-5">Tours Departures and Booking Office</h2>
              <h4 className="mb-4">Marina Blvd, Larrakeyah NT 0820</h4>
              <p>Email : Info@cullenbayfishingcharters.com.au</p>
              <p>Telephone : 0498 271 920</p>
            </div>
          </Col>
          <Col sm="6" className="">
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124671.17414439116!2d130.73991163425003!3d-12.451439624502543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2cc0916e1ac36ccf%3A0x50fd8ccd91509b56!2sMarina%20Blvd%2C%20Larrakeyah%20NT%200820!3m2!1d-12.4514521!2d130.8223135!5e0!3m2!1sen!2sau!4v1727495965467!5m2!1sen!2sau"
                width="600"
                height="450"
                style={{ width: "100%" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </section>
  );
}

export default ContactUs;
