import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

//Images
import HeroImage from "../img/landing_page.jpg";
import FamilyFish from "../img/family_fish.jpg";
import BoatImage from "../img/boat.jpg";
import ContactIcon from "../icons/bed-solid.svg";
import useFetch from "../hooks/useFetch";
import ManFish from "../img/GN_fish.jpg";
import Logo from "../img/logo.jpg"
//Components
import AboutUs from "./AboutUs";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BookNow from "./BookNow";
import Register from "./Register";

import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

function LandingPage() {
  const [registerModal, setRegisterModal] = useState(false);
  const registerToggle = () => setRegisterModal(!registerModal);

  const [bookNowModal, setBookNowModal] = useState(false);
  const bookNowToggle = () => setBookNowModal(!bookNowModal);
  const userEmail = localStorage.getItem("user");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = [
    {
      src: FamilyFish,
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
    },
    {
      src: BoatImage,
      altText: "Slide 2",
      caption: "Slide 2",
      key: 2,
    },
    {
      src: HeroImage,
      altText: "Slide 3",
      caption: "Slide 3",
      key: 3,
    },
  ];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div className="carousel-bg">
          <img src={item.src} alt={item.altText} />
          <div className="overlay">
          </div>
        </div>
      </CarouselItem>
    );
  });
  return (
    <div>
      <section
        id="home"
        className="hero"
      >
        <Navbar />
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          //   {...args}
        >
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
        <div className="carousel-text-center" data-aos="fade-right">
          <h1>Welcome to Cullen Bay Fishing Charters</h1>
          <h3>
            Book your Bluewater fishing adventures with Cullen Bay Fishing
            Charters today.
            <br />
            Contact us now below.
          </h3>
          <div className="" data-aos="fade-left">
            {userEmail && <Button onClick={bookNowToggle}>Book Now</Button>}
            {!userEmail && (
              <Button onClick={registerToggle}>Register to Book Now</Button>
            )}
          </div>
        </div>
      </section>
      <Container className="welcome-section">
        <Row>
          <Col sm={6}>
            <div className="" data-aos="fade-right">
              <h2 className="mb-5">Welcome</h2>
              <p className="text-muted mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
                sequi? Odio alias, officiis ratione earum recusandae facilis,
                adipisci non qui quas harum provident quae amet veritatis
                similique cupiditate nobis rerum?
              </p>
              {userEmail && <Button onClick={bookNowToggle}>Book Now</Button>}
              {!userEmail && (
                <Button onClick={registerToggle}>Register to Book Now</Button>
              )}
            </div>
          </Col>
          <Col sm={6}>
            <div className="" data-aos="fade-left">
              <img src={ManFish} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      <AboutUs />
      <Container className="package-section">
        <h2 className="text-center mb-5">Packages & Pricing</h2>
        <div className="package-section-inner">
          <Card className="package-card" data-aos="fade-right">
            <CardBody>
              <img className="mb-3" src={Logo} alt="" />
              <h3>Full Day</h3>
              <CardSubtitle className="mb-5" tag="h5">
                From 300AUD$
              </CardSubtitle>
              <CardText>
                Full Day Charters are an action packed day of Reef and Pelagic
                Fishing targeting a variety of species such as Black Jewfish,
                Golden Snapper, Coral Trout, to large pelagic such as Spanish
                Mackerel, Queenfish Red Emperor and Cobia ​ Bait, fuel, tackle,
                rods, ice, eskies and catering supplied ​ BYO Alcohol
              </CardText>
              {userEmail && <Button onClick={bookNowToggle}>Book Now</Button>}
              {!userEmail && (
                <Button onClick={registerToggle}>Register to Book Now</Button>
              )}
              {/* <Button>Button</Button> */}
            </CardBody>
          </Card>
          <Card className="package-card" data-aos="fade-left">
            <CardBody>
              <img className="mb-3" src={Logo} alt="" />
              <h3>Half Day</h3>
              <CardSubtitle className="mb-5" tag="h5">
                From 150AUD$
              </CardSubtitle>
              <CardText>
                Full Day Charters are an action packed day of Reef and Pelagic
                Fishing targeting a variety of species such as Black Jewfish,
                Golden Snapper, Coral Trout, to large pelagic such as Spanish
                Mackerel, Queenfish Red Emperor and Cobia ​ Bait, fuel, tackle,
                rods, ice, eskies and catering supplied ​ BYO Alcohol
              </CardText>
              {userEmail && <Button onClick={bookNowToggle}>Book Now</Button>}
              {!userEmail && (
                <Button onClick={registerToggle}>Register to Book Now</Button>
              )}
              {/* <Button>Button</Button> */}
            </CardBody>
          </Card>
        </div>
      </Container>
      {userEmail && (
        <BookNow bookNowToggle={bookNowToggle} bookNowModal={bookNowModal} />
      )}
      {!userEmail && (
        <Register
          registerModal={registerModal}
          registerToggle={registerToggle}
        />
      )}
      <Footer />
    </div>
  );
}

export default LandingPage;
