import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
function Login(props) {
  const { loginModal, loginToggle } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
   const [showPassword, setShowPassword] = useState(false);

   // Function to toggle the state
   const togglePasswordVisibility = () => {
     setShowPassword(!showPassword);
   };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/login",
        {
          email,
          password,
        }
      );
      console.log(response.data,'data')
      localStorage.setItem("user", response.data.email);
      localStorage.setItem("userId", response.data._id); 
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("first_name", response.data.first_name);
      setIsLoggedin(true);
      window.location.reload(false);
      // navigate("/home");
    } catch (err) {
      setError("Invalid email or password");
    }
  };
  return (
    <div>
      <Modal
        className="custom-modal"
        centered
        isOpen={loginModal}
        toggle={loginToggle}
      >
        <ModalBody>
          <div className="px-4">
            <h2>Login</h2>
          </div>
          <Form onSubmit={handleLogin} className="form-wrapper">
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Col>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Col className="password-input">
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  required
                />
                <Button className="show-btn" onClick={togglePasswordVisibility}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </Col>
            </FormGroup>
            <Button type="submit">Login</Button>
          </Form>
          <div className="px-4">{/* <p>Create an Account?</p> */}</div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;
