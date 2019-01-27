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
        className="mbsc-btn-primary "
        flat={true}
      >
        {this.props.children}
      </mobiscroll.Button>
    );
  }
}
