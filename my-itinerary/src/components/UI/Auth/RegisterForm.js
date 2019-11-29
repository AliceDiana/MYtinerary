import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../../store/actions/authAction";
import { clearErrors } from "../../../store/actions/errorAction";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";

// import ImageUploader from "react-images-upload";
class RegisterForm extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    avatar: [],
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(previousProps) {
    const { error } = this.props;
    if (error !== previousProps.error) {
      //Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  onChange = e => {
    this.props.clearErrors();
    this.setState({ [e.target.name]: e.target.value });
  };

  uploadPicture = e => {
    console.log(e.target.files[0]);
    //save the uploaded pic in the state
    this.setState({
      avatar: e.target.files[0]
    });
  };

  onSubmit = e => {
    e.preventDefault();

    // const { name, email, password, avatar } = this.state;

    //create a user object
    const newUser = new FormData();
    newUser.append("name", this.state.name);
    newUser.append("email", this.state.email);
    newUser.append("password", this.state.password);
    newUser.append("avatar", this.state.avatar);
    // Attempt to register
    this.props.register(newUser);
  };

  render() {
    return (
      <React.Fragment>
        <Container id="containerLandingV2">
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title> Register </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.state.msg ? (
                <Alert variant="danger">{this.state.msg}</Alert>
              ) : null}
              <Form onSubmit={this.onSubmit}>
                <Row>
                  <Col>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={this.onChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={this.onChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={this.onChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input
                      accept="image/*"
                      className="input"
                      id="raised-button-file"
                      type="file"
                      name="file"
                      onChange={this.uploadPicture}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="primary" type="submit">
                      Sign up
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Container>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { register, clearErrors })(
  RegisterForm
);

// se utente inserito non ho messaggio di avventuo successo, l errore non si nasconde
