import React from "react";
import MenuItem from "./MenuItem";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import Content from "./Content";
import Home from "./Home";

import "./css/HamMenu.css";
import logo from "../../img/logo.svg";

export default class HamMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      currentContent: 0,
      aa: "ala ma kota",
      bb: "ala nie ma kota"
    };
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

    const menu = ["About Us", "Our Products", "Services", "FAQ", "Contact Us"];
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
        <div className={"hamMenu__contentMenu"}>
          <div className={"hamMenu__contentMenu--con"}>{con}</div>
        </div>
      </div>
    );
  }
}
