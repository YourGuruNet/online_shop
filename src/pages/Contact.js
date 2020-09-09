import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      disabled: "",
      emailSent: null,
    };
  }
  // Nolasa ievadīto tekstu
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault(); // Izslēdz lapas pārlādēšanos
    this.setState({
      disabled: true, // Neļauj nospies submit pogu divreiz!
    });

    Axios.post("http://localhost:3030/api/email", this.state)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSend: true,
          });
        } else {
          this.setState({
            disabled: false,
            emailSend: true,
          });
        }
      })
      .catch((err) => {
        this.setState({
          disabled: false,
          emailSend: false,
        });
      });
  };

  render() {
    return (
      <div className="contact-box">
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>
          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <Form onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <Form.Group>
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control
                          id="full-name"
                          name="name"
                          type="text"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <Form.Group>
                        <Form.Label htmlFor="full-name">Email</Form.Label>
                        <Form.Control
                          id="email"
                          name="email"
                          type="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <Form.Group>
                        <Form.Label htmlFor="full-name">Subject</Form.Label>
                        <Form.Control
                          id="subject"
                          name="subject"
                          type="text"
                          value={this.state.subject}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <Form.Group>
                        <Form.Label htmlFor="full-name">Message</Form.Label>
                        <Form.Control
                          id="message"
                          name="message"
                          as="textarea"
                          rows="3"
                          value={this.state.message}
                          onChange={this.handleChange}
                        />
                      </Form.Group>
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-left">
                  <Button
                    className="btn btn-warning d-inline-block"
                    variant="primary"
                    type="submit"
                    disabled={this.state.disabled}
                  >
                    Send
                  </Button>
                </div>
                <div className="status">
                  {this.state.emailSent === true && (
                    <p className="d-inline success-msg">Emails Sent!</p>
                  )}
                  {this.state.emailSent === false && (
                    <p className="d-inline err-msg">
                      Sorry your Email not working!
                    </p>
                  )}
                </div>
              </Form>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>Riga, Latvia, Nometnu - 10</p>
                </li>

                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+ 371 27150201</p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>contact@phoneshop.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
