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
      localStorage.setItem("user", response.data.email);
      localStorage.setItem("userId", response.data._id); 
      localStorage.setItem("token", response.data.token);
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
            <h3>Login</h3>
          </div>
          <Form onSubmit={handleLogin} className="form-wrapper">
            <FormGroup>
              <Label sm={2} for="exampleEmail">
                Email
              </Label>
              <Col sm={8}>
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
              <Label sm={2} for="examplePassword">
                Password
              </Label>
              <Col sm={8}>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="Enter your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                />
              </Col>
            </FormGroup>
            <Button type="submit">Login</Button>
          </Form>
          <div className="px-4">
            <p>Create an Account?</p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;
