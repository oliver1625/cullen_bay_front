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
  NavbarToggler,
  Collapse,
} from "reactstrap";
import Register from "./Register";
import Login from "./Login";
import Logo from "../img/logo.jpg";

function Navbar() {
  const [registerModal, setRegisterModal] = useState(false);
  const registerToggle = () => setRegisterModal(!registerModal);

  const [loginModal, setLoginModal] = useState(false);
  const loginToggle = () => setLoginModal(!loginModal);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [numberofParticipants, setnumberofParticipants] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const userEmail = localStorage.getItem("user");
  const first_name = localStorage.getItem("first_name");
  const name = localStorage.getItem("name");

  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS and set the duration of the animations
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("https://oliver.geniuswrite.com/api/auth/logout"); // Call the logout API
      localStorage.removeItem("user");
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      localStorage.removeItem("first_name");
      localStorage.removeItem("name");
      navigate("/");
    } catch (err) {
      console.error("Failed to logout:", err);
    }
  };
  return (
    <div className="top-navbar">
      <div className="top-navbar desktop-nav">
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

              <NavItem>
                <NavLink href="/about-us">
                  <Link to="/about-us">About Us</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <Link to="/contact-us">Contact Us</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </header>
        <div className="user-navbar">
          <Nav>
            {userEmail && (
              <NavItem className="d-flex align-items-center">
                <NavLink>
                  <Link to="/profile">Welcome</Link>
                </NavLink>
                <NavLink>
                  {" "}
                  <Link to="/profile"> {first_name},</Link>
                </NavLink>
              </NavItem>
            )}
            {userEmail && (
              <NavItem>
                <NavLink onClick={handleLogout} href="#">
                  Logout
                </NavLink>
              </NavItem>
            )}
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
          </Nav>
        </div>
      </div>
      {/* Mobile Hamburger Menu Icon */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <span className="hamburger-icon">&#9776;</span>
      </div>
      {/* Mobile Navbar */}
      <div className="mobile-view-logo">
        <div className="logo-navbar">
          <div className="logo-container">
            <Link to="/home">
              {" "}
              <img src={Logo} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <ul className={`mobile-nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/home" onClick={toggleMobileMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-us" onClick={toggleMobileMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={toggleMobileMenu}>
            Contact Us
          </Link>
        </li>
        {userEmail && (
          <li className="">
            <NavLink>
              <Link to="/profile">Profile</Link>
            </NavLink>
          </li>
        )}
        {userEmail && (
          <li>
            <NavLink onClick={handleLogout} href="#">
              Logout
            </NavLink>
          </li>
        )}
        {!userEmail && (
          <li>
            <NavLink onClick={loginToggle} href="#">
              Login
            </NavLink>
          </li>
        )}
        {!userEmail && (
          <li>
            <NavLink onClick={registerToggle} href="#">
              Register
            </NavLink>
          </li>
        )}
      </ul>
      {/* Resgister Modal */}
      <Register registerModal={registerModal} registerToggle={registerToggle} />
      <Login loginModal={loginModal} loginToggle={loginToggle} />
    </div>
  );
}

export default Navbar;
