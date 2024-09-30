import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
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

import Fish from "../img/fish on hand.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function BookNow(props) {
  const { bookNowModal, bookNowToggle, singleBooking } = props;
  const [confirmModal, setConfirmModal] = useState(false);
    console.log(singleBooking, "singleBooking");
  const toggleConfrimModal = () => {
    setConfirmModal(!confirmModal);
  };

  const [numberofParticipants, setnumberofParticipants] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("10:00");
  const [error, setError] = useState("");
  const [bookingDetails, setBookingDetails] = useState([]);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  //   const navigate = useNavigate("");

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8800/api/booking/${userId}`,
        {
          numberofParticipants,
          date,
          time,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setBookingDetails(response.data);
    } catch {
      setError("Booking has been cancelled");
    }
  };

  

  return (
    <div>
      <Modal
        className="custom-modal"
        isOpen={bookNowModal}
        centered
        toggle={bookNowToggle}
      >
        <ModalBody className="p-4">
          <div className="pb-4">
            <h3>Book Now Your Fishing Charter</h3>
          </div>
          <Row className="book-modal-now-container">
            <Col sm={6}>
              <div className="left">
                <div className="book-now-modal-img">
                  <img src={Fish} alt="" />
                </div>
                <div className="mt-3">
                  <h5>From AUD $300</h5>
                  <p>
                    Duration: <span>6 Hours</span>
                  </p>
                  <p>
                    Location: <span>Cullen Bay, NT</span>
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <Form onSubmit={handleForm} className="">
                <FormGroup>
                  <Label for="numberofPeople">Number of Participants</Label>
                  <Col>
                    <Input
                      id="numberofPeople"
                      name="numberofPeople"
                      placeholder="Enter Number"
                      type="number"
                      onChange={(e) => setnumberofParticipants(e.target.value)}
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="date">Choose your date</Label>
                  <Col>
                    <DatePicker
                      required
                      className="form-control"
                      selected={date}
                      onChange={(e) => setDate(moment(e).format("YYYY-MM-DD"))}
                    />
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="time">Choose your time</Label>
                  <Col>
                    <TimePicker
                      required
                      className="form-control"
                      clearIcon
                      disableClock="true"
                      id="time"
                      name="time"
                      onChange={(e) => setTime(e)}
                      value={time}
                    />
                  </Col>
                </FormGroup>
                <Button type="sumbit" onClick={toggleConfrimModal}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <div className="package-info">
            <p>
              Your Package includes Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatem quaerat animi error laboriosam
              voluptas nobis. Accusantium quia mollitia voluptates beatae odit
              tempora dicta eaque. Doloribus et quae eius dolorum? Dolor.
            </p>
          </div>
          <Modal
            isOpen={confirmModal}
            toggle={toggleConfrimModal}
            className="custom-modal"
            centered
          >
            <ModalBody>
              {bookingDetails && (
                <div className="confirmation-box">
                  <h5 className="text-center">
                    Your Booking has been Confirmed
                  </h5>
                  <p>
                    Date: {moment(bookingDetails.date).format("YYYY-MM-DD")}
                  </p>
                  <p>
                    Number of Participants:{" "}
                    {bookingDetails.numberofParticipants}
                  </p>
                  <p>Time: {bookingDetails.time}</p>
                  <Button
                    color="primary"
                    href="/profile"
                    onClick={toggleConfrimModal}
                  >
                    Manage Your Booking
                  </Button>{" "}
                </div>
              )}
            </ModalBody>
          </Modal>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default BookNow;
