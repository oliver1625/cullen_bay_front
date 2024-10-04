import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
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
import Register from "./Register";
import Login from "./Login";
import Logo from '../img/logo.jpg'

function Navbar() {
  const [registerModal, setRegisterModal] = useState(false);
  const registerToggle = () => setRegisterModal(!registerModal);

  const [loginModal, setLoginModal] = useState(false);
  const loginToggle = () => setLoginModal(!loginModal);

  const [numberofParticipants, setnumberofParticipants] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const userEmail = localStorage.getItem("user");
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS and set the duration of the animations
  }, []);
  
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8800/api/auth/logout"); // Call the logout API
      localStorage.removeItem("user"); // Clear the token from local storage
      localStorage.removeItem("userId"); // Remove the user ID from localStorage
      localStorage.removeItem("token"); // Remove the token as well if needed
      navigate("/");
    } catch (err) {
      console.error("Failed to logout:", err);
    }
  };
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8800/api/booking", {
        numberofParticipants,
        date,
        time,
      });
      console.log(response);
      alert("Your Booking has been confirmed");
    } catch {
      setError("Booking has been cancelled");
    }
  };
  return (
    <div className="top-navbar">
      <div className="top-navbar">
        <div className="logo-navbar">
          <div className="logo-container">
            <img src={Logo} alt="" />
          </div>
        </div>
        <header className="nav-bar">
          <div className="nav-bar-inner">
            <Nav>
              <NavItem>
                <NavLink active href="/home">
                  <Link to="/home">Home</Link>
                </NavLink>
              </NavItem>
              {!userEmail && (
                <NavItem>
                  <NavLink onClick={loginToggle} href="#">
                    Login
                  </NavLink>
                </NavItem>
              )}
              {!userEmail && (
                <NavItem>
                  <NavLink onClick={registerToggle} href="#">
                    Register
                  </NavLink>
                </NavItem>
              )}
              <NavItem>
                <NavLink href="#">
                  <Link to="/contact-us">Contact Us</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about-us">
                  <Link to="/about-us">About Us</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about-us">
                  <Link to="/about-us">Book Now</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </header>
        <div className="user-navbar">
          <Nav>
            {userEmail && (
              <NavItem className="d-flex align-items-center">
                <Link to="/profile">Welcome </Link>
                <p className="mb-0">User,</p>
              </NavItem>
            )}
            {userEmail && (
              <NavItem>
                <NavLink onClick={handleLogout} href="#">
                  Logout
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </div>
      </div>

      {/* Resgister Modal */}
      <Register registerModal={registerModal} registerToggle={registerToggle} />
      <Login loginModal={loginModal} loginToggle={loginToggle} />
    </div>
  );
}

export default Navbar;
