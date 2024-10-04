import React, { useEffect } from "react";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import TopView from "../img/top_view.jpg";
import Boat from "../img/boat.jpg";
import FishFamily from "../img/family_fish.jpg";
import GNFish from "../img/GN_fish.jpg";
import NYFish from "../img/NY fish.jpg";
import GangFish from "../img/gang_fish.jpg";
import Navbar from "./Navbar";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <section id="about-us" style={{ background: `url(${TopView})` }}>
        <h2 className="text-center text-white py-5">About us</h2>
        <div className="about-us-container">
          <Row className="p-5">
            <Col sm="6" className="" data-aos="zoom-in-right">
              <Card className="">
                <CardBody>
                  <div className="card-image">
                    <img className="" src={Boat} alt="" />
                    <div className="overlay"></div>

                    <CardTitle className="card-title" tag="h5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium, blanditiis.
                    </CardTitle>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6" className="" data-aos="zoom-in-left">
              <Card className="">
                <CardBody>
                  <div className="card-image">
                    <img className="" src={FishFamily} alt="" />
                    <div className="overlay"></div>
                    <CardTitle className="card-title" tag="h5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugiat quisquam, autem quaerat atque sed expedita!
                    </CardTitle>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6" className="" data-aos="zoom-in-right">
              <Card className="">
                <CardBody>
                  <div className="card-image">
                    <img className="" src={GNFish} alt="" />
                    <div className="overlay"></div>

                    <CardTitle className="card-title" tag="h5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quasi tempora veniam, in possimus facere at quas itaque
                      voluptate voluptas dolorum.
                    </CardTitle>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6" className="" data-aos="zoom-in-left">
              <Card className="">
                <CardBody>
                  <div className="card-image">
                    <img className="" src={GangFish} alt="" />
                    <div className="overlay"></div>

                    <CardTitle className="card-title" tag="h5">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorum minima molestiae ex sequi, accusamus quam.
                    </CardTitle>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
