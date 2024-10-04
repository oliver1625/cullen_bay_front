import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { Modal, Form, FormGroup, Label, Button, ModalBody } from "reactstrap";

function CheckoutForm({bookingDetails, handleForm }) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  const [confirmModal, setConfirmModal] = useState(false);
  const toggleConfrimModal = () => {
    setConfirmModal(!confirmModal);
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);
    try {
      const {
        data: { clientSecret },
      } = await axios.post(
        `http://localhost:8800/api/create-payment-intent`,
        {
          amount: 30000,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const cardElement = elements.getElement(CardElement);
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              address: {
                postal_code: "12345",
              },
            },
          },
        }
      );
      console.log(paymentIntent, "paymentIntent cardElement");
      if (error) {
        setError(error.message);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        console.log("Payment succeeded:", paymentIntent);
      }
    } catch (err) {
      setError("Payment failed");
      setProcessing(false);
    }
  };

  const handleFormAndPayment = (e) => {
    e.preventDefault();
    handleForm(e);
    handlePayment(e);
    toggleConfrimModal()
  };

  return (
    <Form onSubmit={handleFormAndPayment}>
      <FormGroup>
        <Label for="card" className="mb-4">Card Information</Label>
        <CardElement id="card" />
      </FormGroup>
      <Button
        type="submit"
        disabled={!stripe || processing}
        onClick={handleFormAndPayment}
        className="my-4"
      >
        {processing ? "Processing..." : "Book and Pay $300"}
      </Button>
      {error && <div>{error}</div>}
      <Modal
        isOpen={confirmModal}
        toggle={toggleConfrimModal}
        className="custom-modal"
        centered
      >
        <ModalBody>
          {bookingDetails && (
            <div className="confirmation-box">
              <h5 className="text-center">Payment Successful</h5>
              <h5 className="text-center">Your Payment has been Confirmed</h5>
              <p>Date: {moment(bookingDetails.date).format("YYYY-MM-DD")}</p>
              <p>
                Number of Participants: {bookingDetails.numberofParticipants}
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
    </Form>
  );
}

export default CheckoutForm;
