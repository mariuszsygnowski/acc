import React from "react";
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      currentContent: 3,
      aa: "ala ma kota",
      bb: "ala nie ma kota",
      yourName: "",
      yourEmail: "",
      yourMessage: ""
    };
    // this.handleLinkClick = this.handleLinkClick.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.changeValueEmail = this.changeValueEmail.bind(this);
    this.changeValueMessage = this.changeValueMessage.bind(this);
  }

  changeValue(event) {
    this.setState({ yourName: event.target.value });
  }
  changeValueEmail(event) {
    this.setState({ yourEmail: event.target.value });
  }
  changeValueMessage(event) {
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
            onChange={this.changeValue}
            value={this.state.yourName}
          />
          <mobiscroll.Input
            name="email"
            icon="material-email"
            inputStyle="outline"
            type="email"
            placeholder="Your e-mail"
            onChange={this.changeValueEmail}
            value={this.state.yourEmail}
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
          />

          <mobiscroll.Button onClick={this.showAlert} type="submit">
            Send message
          </mobiscroll.Button>
        </mobiscroll.FormGroup>
      </mobiscroll.Form>
    );
  }
}
