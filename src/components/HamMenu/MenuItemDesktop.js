import React from "react";
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

export default class MenuItemDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    return (
      <mobiscroll.Button
        onClick={this.props.onClick}
        // outline={true}
        flat={true}
        color="light"
      >
        {this.props.children}
      </mobiscroll.Button>
    );
  }
}
