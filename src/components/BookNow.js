import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

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
import CheckoutForm from "./CheckoutForm";

function BookNow(props) {
  const { bookNowModal, bookNowToggle, bookingId } = props;
  //   const [confirmModal, setConfirmModal] = useState(false);
  const stripePromise = loadStripe(
    "pk_test_51PeqGxGJgFtp3kPeKU1eYy60mQ0LOLyBH6ZSDZXfZVA79QO58imzUgcRvGaa2Utw3UEqM7R74Tm8PHuL7RLi9Oeh009tyhHf4k"
  ); // Use your publishable key

  //   const toggleConfrimModal = () => {
  //     setConfirmModal(!confirmModal);
  //   };

  const [numberofParticipants, setnumberofParticipants] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [time, setTime] = useState("10:00");
  const [error, setError] = useState("");
  const [bookingDetails, setBookingDetails] = useState([]);
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const first_name = localStorage.getItem("name");
  const handleForm = async (e) => {
    e.preventDefault();

    const isUpdate = !!bookingId;
    try {
      const response = isUpdate
        ? await axios.put(
            `https://oliver.geniuswrite.com/api/booking/${bookingId}`,
            {
              numberofParticipants,
              date,
              time,
              email,
              first_name,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
        : await axios.post(
            `https://oliver.geniuswrite.com/api/booking/${userId}`,
            {
              numberofParticipants,
              date,
              time,
              email,
              first_name,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

      if (isUpdate) {
        // Update booking details
        // setnumberofParticipants(response.data.numberofParticipants);
        // setDate(moment(response.data.date).format("YYYY-MM-DD"));
        // setTime(response.data.time);
        setBookingDetails(response.data);
        window.location.reload(false);
      } else {
        setBookingDetails(response.data);
      }

      setError("");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          (isUpdate
            ? "Error updating Booking details"
            : "Booking has been cancelled")
      );
    }
  };

  const fetchSingleBooking = async () => {
    try {
      const response = await axios.get(
        `https://oliver.geniuswrite.com/api/booking/${bookingId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setnumberofParticipants(response.data.numberofParticipants);
      setDate(moment(response.data.date).format("YYYY-MM-DD"));
      setTime(response.data.time);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching Booking details");
    }
  };

  useEffect(() => {
    fetchSingleBooking();
  }, [bookingId]);

  return (
    <div>
      <Elements stripe={stripePromise}>
        <Modal
          className="custom-modal"
          isOpen={bookNowModal}
          centered
          toggle={bookNowToggle}
          size="lg"
        >
          <ModalBody className="p-5">
            <div className="pb-4">
              <h2>Book Your Fishing Charter</h2>
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
                <Form className="">
                  <FormGroup>
                    <Label for="numberofPeople">Number of Participants</Label>
                    <Col>
                      <Input
                        id="numberofPeople"
                        name="numberofPeople"
                        placeholder="Enter Number"
                        type="number"
                        value={numberofParticipants}
                        onChange={(e) =>
                          setnumberofParticipants(e.target.value)
                        }
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
                        onChange={(e) =>
                          setDate(moment(e).format("YYYY-MM-DD"))
                        }
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
                  <CheckoutForm
                    handleForm={handleForm}
                    bookingDetails={bookingDetails}
                    bookingId={bookingId}
                    numberofParticipants={numberofParticipants}
                  />
                  {/* <Button onClick={toggleConfrimModal}>Submit</Button> */}
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
            {/* <Modal
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
            </Modal> */}
          </ModalBody>
        </Modal>
      </Elements>
    </div>
  );
}

export default BookNow;
