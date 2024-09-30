import React, { useState } from "react";
import {
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Card,
} from "reactstrap";

import HeroImage from "../img/landing_page.jpg";
import AboutUs from "./AboutUs";
import Navbar from "./Navbar";

import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";

import ContactIcon from "../icons/bed-solid.svg";
import useFetch from "../hooks/useFetch";
import Footer from "./Footer";
import BookNow from "./BookNow";
import Register from "./Register";

function LandingPage() {
  const [registerModal, setRegisterModal] = useState(false);
  const registerToggle = () => setRegisterModal(!registerModal);

  const [bookNowModal, setBookNowModal] = useState(false);
  const bookNowToggle = () => setBookNowModal(!bookNowModal);
  const userEmail = localStorage.getItem("user");


//  const {data,loading,error,refetchData} = useFetch("")
  return (
    <div>
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
        {userEmail && <Button onClick={bookNowToggle}>Book Now</Button>}
        {!userEmail && <Button onClick={registerToggle}>Register to Book Now</Button>}
      </section>
      <AboutUs />
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
