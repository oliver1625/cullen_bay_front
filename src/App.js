import { Col, Form, FormGroup, Input, Label, Button } from "reactstrap";
import './App.css';
import HeroImage from './img/landing_page.jpg'
import TopView from './img/top_view.jpg'

function App() {
  return (
    <div className="App">
      <header>
        <nav></nav>
      </header>
      <section
        id="home"
        className="hero"
        style={{ background: `url(${HeroImage})` }}
      >
        {/* <img className="" src={HeroImage} alt="" /> */}
        <h2>Welcome to Top End Saltwater Charters</h2>
        <h3>
          Book your Bluewater fishing adventures with Cullen Bay Fishing
          Charters today.
          <br />
          Contact us now below.
        </h3>
        <button>Book Now</button>
      </section>
      <section id="signup" style={{ background: `url(${TopView})` }}>
        <Form className="form-wrapper">
          <FormGroup row>
            <Label sm={2} for="firstName">
              First Name
            </Label>
            <Col sm={8}>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Enter Your First Name"
                type="name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for="lastName">
              Last Name
            </Label>
            <Col sm={8}>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Enter Your Last Name"
                type="name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for="exampleEmail">
              Email
            </Label>
            <Col sm={8}>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Enter your Email"
                type="email"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2} for="examplePassword">
              Password
            </Label>
            <Col sm={8}>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Enter your Password"
                type="password"
              />
            </Col>
          </FormGroup>
          <Button>Sign Up</Button>
        </Form>
        {/* <div className="form-wrapper">
          <form>
            <div class="first_name_form form-input-wrapper">
              <label for="first_name">First Name:</label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                required
                minlength="4"
              />
            </div>
            <div class="second_name_form form-input-wrapper">
              <label for="second_name">Second Name:</label>
              <input
                id="second_name"
                type="text"
                name="second_name"
                required
                minlength="4"
              />
            </div>
            <div class="email-form form-input-wrapper">
              <label for="email">Email:</label>
              <input id="email" type="email" required name="_replyto" />
            </div>
            <div class="phone_number_form form-input-wrapper">
              <label for="phone_number">Phone Number:</label>
              <input
                id="phone_number"
                type="number"
                name="phone_number"
                required
                minlength="8"
              />
            </div>

            <button value="Send" type="submit">
              Submit
            </button>
          </form>
        </div> */}
      </section>
    </div>
  );
}

export default App;
