import React from "react";
import MenuItem from "./MenuItem";
import MenuItemDesktop from "./MenuItemDesktop";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import OurTeam from "./OurTeam";
import OurServices from "./OurServices";
import ContactUs from "./ContactUs";
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
      con = <OurTeam />;
    }
    if (this.state.currentContent === 2) {
      con = <OurServices />;
    }
    if (this.state.currentContent === 3) {
      con = <ContactUs />;
    }

    const menu = ["ABOUT US", "OUR TEAM", "OUR SERVICES", "CONTACT US"];
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.2}s`}
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
            <img className="full" src={logo} alt={"logo"} />
            <MenuButton
              open={this.state.menuOpen}
              onClick={() => this.handleMenuClick()}
              color="white"
            />
          </div>
          <Menu open={this.state.menuOpen}>{menuItems}</Menu>
        </div>
        <div className="hamMenu__menu--desktop">
          <img className="hamMenu__menu--img" src={logo} alt={"logo"} />
          <div className="hamMenu__menu--buttons1">
            <mobiscroll.Form className="hamMenu__menu--buttons">
              {menuItemsDesktop}
            </mobiscroll.Form>
          </div>
        </div>

        <div className={"hamMenu__contentMenu"}>
          <div className={"hamMenu__contentMenu--con"}>{con}</div>
        </div>
      </div>
    );
  }
}
