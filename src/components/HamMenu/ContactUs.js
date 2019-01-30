import React from "react";
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yourName: "",
      yourNameValid: true,
      yourEmail: "",
      yourEmailValid: true,
      yourMessage: "",
      yourMessageValid: true
    };
    // this.handleLinkClick = this.handleLinkClick.bind(this);
    this.changeValueName = this.changeValueName.bind(this);
    this.changeValueEmail = this.changeValueEmail.bind(this);
    this.changeValueMessage = this.changeValueMessage.bind(this);
  }

  changeValueName(event) {
    if (event.target.value === "") {
      this.setState({ yourNameValid: false });
    } else {
      this.setState({ yourNameValid: true });
    }

    this.setState({ yourName: event.target.value });
  }
  changeValueEmail(event) {
    if (event.target.value === "") {
      this.setState({ yourEmailValid: false });
    } else {
      this.setState({ yourEmailValid: true });
    }
    this.setState({ yourEmail: event.target.value });
  }
  changeValueMessage(event) {
    if (event.target.value === "") {
      this.setState({ yourMessageValid: false });
    } else {
      this.setState({ yourMessageValid: true });
    }
    this.setState({ yourMessage: event.target.value });
  }

  showAlert = e => {
    e.preventDefault();

    if (
      (this.state.yourEmail &&
        this.state.yourName &&
        this.state.yourMessage) === ""
    ) {
      mobiscroll.toast({
        message: "All boxes is requied",
        color: "danger"
      });
      if (this.state.yourName === "") {
        this.setState({ yourNameValid: false });
      }
      if (this.state.yourEmail === "") {
        this.setState({ yourEmailValid: false });
      }
      if (this.state.yourMessage === "") {
        this.setState({ yourMessageValid: false });
      }
    } else {
      mobiscroll.alert({
        title: `Hi ${this.state.yourName} !`,
        message: `Your email from ${
          this.state.yourEmail
        } has been sent. We will contact with you shortly`,
        callback: function() {
          mobiscroll.toast({
            message: "Thank you for message"
          });
        }
      });
    }
  };

  render() {
    return (
      <mobiscroll.Form
        theme="auto"
        lang="auto"
        className="hamMenu__contentMenu--con"
      >
        <mobiscroll.FormGroup>
          <mobiscroll.Input
            type="text"
            icon="user4"
            inputStyle="outline"
            placeholder="Your name"
            onChange={this.changeValueName}
            value={this.state.yourName}
            valid={this.state.yourNameValid}
            errorMessage="Your name can't be empty"
          />
          <mobiscroll.Input
            name="email"
            icon="material-email"
            inputStyle="outline"
            type="email"
            placeholder="Your e-mail"
            onChange={this.changeValueEmail}
            value={this.state.yourEmail}
            valid={this.state.yourEmailValid}
            errorMessage="Your email can't be empty"
          />

          <mobiscroll.Textarea
            inputStyle="outline"
            icon="bubble"
            iconAlign="left"
            placeholder="Type your message here"
            height={999}
            labelStyle="floating"
            onChange={this.changeValueMessage}
            value={this.state.yourMessage}
            valid={this.state.yourMessageValid}
            errorMessage="Your message can't be empty"
          />

          <mobiscroll.Button onClick={this.showAlert} type="submit">
            Send message
          </mobiscroll.Button>
        </mobiscroll.FormGroup>
      </mobiscroll.Form>
    );
  }
}
