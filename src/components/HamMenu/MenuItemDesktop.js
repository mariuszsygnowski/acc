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
      <div className="menuItemsDesktop">
        <mobiscroll.Form>
          <div
            className="mbsc-btn-group-justified "
            onClick={this.props.onClick}
          >
            <mobiscroll.Button className=" mbsc-btn-primary " flat={true}>
              {this.props.children}
            </mobiscroll.Button>
          </div>
        </mobiscroll.Form>
      </div>
    );
  }
}
