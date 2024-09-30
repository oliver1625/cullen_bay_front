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
function Register(props) {
  const { registerModal, registerToggle } = props;
  const [confirmModal, setConfirmModal] = useState(false);
  const toggleConfrimModal = () => {
    setConfirmModal(!confirmModal);
  };
  //   const [registerModal, setRegisterModal] = useState(false);
  //   const registerToggle = () => setRegisterModal(!registerModal);

  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhoneNumber] = useState(0);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/register",
        {
          first_name,
          last_name,
          email,
          phone_number,
          password,
        }
      );
      setSuccess(response.data);
      setError(null);
      setConfirmModal(!confirmModal);
      //   setTimeout(() => {
      //     navigate("/home");
      //   });
    } catch (err) {
      setError(err.response?.data.message || "An error occured during signup");
      setSuccess(null);
    }
  };

  return (
    <div>
      <Modal
        className="custom-modal"
        centered
        isOpen={registerModal}
        toggle={registerToggle}
      >
        <ModalBody>
          <div className="px-4">
            <h3>Sign up to Book Now</h3>
          </div>
          <Form onSubmit={handleRegister} className="form-wrapper">
            <FormGroup>
              <Label sm={2} for="firstName">
                First Name
              </Label>
              <Col sm={8}>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Enter Your First Name"
                  type="text"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label sm={2} for="lastName">
                Last Name
              </Label>
              <Col sm={8}>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Enter Your Last Name"
                  type="text"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label sm={2} for="exampleEmail">
                Email
              </Label>
              <Col sm={8}>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter your Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Label sm={2} for="phoneNumber">
                Phone Number
              </Label>
              <Col sm={8}>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your Phone Number"
                  type="number"
                  value={phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Col>
            </FormGroup>
            <p className="mt-3 mb-0 error-msg">{error}</p>

            <Button type="submit">Sign Up</Button>
          </Form>
          {success && (
            <Modal
              isOpen={confirmModal}
              toggle={toggleConfrimModal}
              className="custom-modal"
              centered
            >
              <ModalBody>
                <div className="confirmation-box">
                  <h5 className="text-center">Your Account has been created</h5>
                  <Button
                    color="primary"
                    href="/home"
                    onClick={toggleConfrimModal}
                  >
                    Done
                  </Button>
                </div>
              </ModalBody>
            </Modal>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Register;
