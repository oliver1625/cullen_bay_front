import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Modal,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  ModalBody,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  ModalFooter,
} from "reactstrap";
import HeroImage from "../img/landing_page.jpg";
import Navbar from "./Navbar";
import axios from "axios";
import Loading from "./Loading";
import BookNow from "./BookNow";

function UserDashboard() {
  const [activeTab, setActiveTab] = useState("1");
  const [confirmModal, setConfirmModal] = useState(false);
  const [changeScheduleModal, setChangeScheduleModal] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const toggleConfrimModal = () => {
    setConfirmModal(!confirmModal);
  };

  const toggleChangeScheduleModal = () => {
    setChangeScheduleModal(!changeScheduleModal);
  };

  const [profileUser, setProfileUser] = useState(null);
  const [bookings, setBookings] = useState(null);
  const [singleBooking, setSingleBooking] = useState({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  console.log(bookingId, "bookid");
  const fetchProfileDetails = async () => {
    try {
      const response = await axios.get(
        `https://oliver.geniuswrite.com/api/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response)
      setProfileUser(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching profile details");
    } finally {
      setLoading(false);
    }
  };

  const fetchBooking = async () => {
    try {
      const response = await axios.get(
        `https://oliver.geniuswrite.com/api/booking/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const filteredBookings = response.data.filter((booking) => {
        return booking.userId === userId;
      });
      setBookings(filteredBookings);
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching Booking details");
    } finally {
      setLoading(false);
    }
  };

  const deleteBooking = async (bookingId) => {
    try {
      const response = await axios.delete(
        `https://oliver.geniuswrite.com/api/booking/${bookingId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      console.log("Booking deleted successfully:", response.data);
      fetchBooking();
    } catch {
      setError("Error while deleting Booking");
    }
  };

  useEffect(() => {
    fetchProfileDetails();
    fetchBooking();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <section className="profile-page">
      <div
        className="profile-page-hero"
        style={{ background: `url(${HeroImage})` }}
      >
        <Navbar />
        <h3 className="welcome-text mb-5">
          Welcome to Your Profile {profileUser && profileUser.first_name}
        </h3>
      </div>
      <div className="container details py-5">
        <Nav pills tabs>
          <NavItem>
            <NavLink
              className={activeTab === "1" ? "active" : ""}
              onClick={() => toggle("1")}
            >
              My Bookings
            </NavLink>
          </NavItem>
          <NavItem className="mx-3">
            <NavLink
              className={activeTab === "2" ? "active" : ""}
              onClick={() => toggle("2")}
            >
              User profile
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Container className="py-5">
              <Row>
                {bookings && bookings.length > 0 ? (
                  bookings.map((item) => (
                    <Col sm="4">
                      <div className="booking-card">
                        <p>Date : {item.date.split("T")[0]}</p>
                        <p>Time : {item.time}</p>
                        <p>Adults : {item.numberofParticipants}</p>
                        <div className="d-flex">
                          <Button
                            onClick={() => {
                              toggleChangeScheduleModal();
                              setBookingId(item._id);
                            }}
                          >
                            Change Schedule
                          </Button>

                          <Button
                            className="delete-btn"
                            onClick={() => {
                              toggleConfrimModal();
                              setBookingId(item._id);
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                        <BookNow
                          bookingId={bookingId}
                          bookNowToggle={toggleChangeScheduleModal}
                          bookNowModal={changeScheduleModal}
                        />
                      </div>
                      <Modal
                        isOpen={confirmModal}
                        toggle={toggleConfrimModal}
                        className="custom-modal"
                        centered
                      >
                        <ModalBody>
                          <div className="confirmation-box">
                            <h5 className="text-center">
                              Are you sure want to delete your Booking?
                            </h5>
                            <ModalFooter>
                              <Button
                                color="danger"
                                href="/profile"
                                onClick={() => deleteBooking(bookingId)}
                              >
                                Yes
                              </Button>{" "}
                              <Button
                                color="primary"
                                onClick={toggleConfrimModal}
                              >
                                No
                              </Button>{" "}
                            </ModalFooter>
                          </div>
                        </ModalBody>
                      </Modal>
                    </Col>
                  ))
                ) : (
                  <div className="no-bookings">
                    <h3>You don't have any Bookings</h3>
                  </div>
                )}
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="2">
            <div className="container">
              {profileUser && (
                <Form className="form-wrapper">
                  <FormGroup>
                    <Label sm={2} for="firstName">
                      First Name
                    </Label>
                    <Col sm={8}>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter Your First Name"
                        type="name"
                        value={profileUser.first_name}
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
                        type="name"
                        value={profileUser.last_name}
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
                        value={profileUser.email}
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
                        value={profileUser.phone_number}
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
                        value={profileUser.password}
                      />
                    </Col>
                  </FormGroup>
                  {/* <Button>Update</Button> */}
                </Form>
              )}
            </div>
          </TabPane>
        </TabContent>
      </div>
    </section>
  );
}

export default UserDashboard;
