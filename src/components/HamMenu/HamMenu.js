import React from "react";
import MenuItem from "./MenuItem";
import MenuItemDesktop from "./MenuItemDesktop";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import Content from "./Content";
import Home from "./Home";

import "./css/HamMenu.css";
import logo from "../../img/logo.svg";
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

export default class HamMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      currentContent: 0,
      aa: "ala ma kota",
      bb: "ala nie ma kota"
    };
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick(index) {
    this.setState({ menuOpen: false, currentContent: index });
  }

  render() {
    let con;

    if (this.state.currentContent === 0) {
      con = <Home />;
    }
    if (this.state.currentContent === 1) {
      con = <Content par={this.state.bb} />;
    }

    const menu = ["Home", "Our Products", "Services", "FAQ", "Contact Us"];
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick(index);
          }}
        >
          {val}
        </MenuItem>
      );
    });
    const menuItemsDesktop = menu.map((val, index) => {
      return (
        <MenuItemDesktop
          key={index}
          onClick={() => {
            this.handleLinkClick(index);
          }}
        >
          {val}
        </MenuItemDesktop>
      );
    });

    return (
      <div className={"hamMenu"}>
        <div className={"hamMenu__menu"}>
          <div className={"hamMenu__container"}>
            <img src={logo} alt={"logo"} />

            <MenuButton
              open={this.state.menuOpen}
              onClick={() => this.handleMenuClick()}
              color="white"
            />
          </div>
          <Menu open={this.state.menuOpen}>{menuItems}</Menu>
        </div>

        <mobiscroll.Form>
          <div className="mbsc-grid mbsc-form-grid">
            <div className="mbsc-row">
              <div className="mbsc-col-sm-12 mbsc-col-md-2">
                <img src={logo} alt={"logo"} />
              </div>
              <div className="mbsc-col-sm-12 mbsc-col-md-10">
                <mobiscroll.FormGroup>
                  <div className="mbsc-btn-group-justified ">
                    {menuItemsDesktop}
                  </div>
                </mobiscroll.FormGroup>
              </div>
            </div>
          </div>
        </mobiscroll.Form>

        <div className={"hamMenu__contentMenu"}>
          <div className={"hamMenu__contentMenu--con"}>{con}</div>
        </div>
      </div>
    );
  }
}
