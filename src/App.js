import React, { Component } from "react";

/* import mobiscroll */
import mobiscroll from "@mobiscroll/react-lite";
import HamMenu from "./components/HamMenu/HamMenu";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import "./App.css";

mobiscroll.settings = {
  theme: "mobiscroll-dark",
  lang: "auto"
};

class App extends Component {
  action = () => {
    mobiscroll.toast({
      message: "Button was clicked"
    });
  };

  render() {
    return (
      <div className="app">
        <HamMenu />

        {/* <mobiscroll.Form>
          <div className=" mbsc-btn-warning ">
            <mobiscroll.Button
              className=" mbsc-btn-outline mbsc-btn-primary "
              outline={true}
              icon="tag"
              width={[10]}
            >
              Tag
            </mobiscroll.Button>
            <mobiscroll.Button icon="heart">Favorite</mobiscroll.Button>
            <mobiscroll.Button icon="flag" disabled>
              Flag
            </mobiscroll.Button>
          </div>
        </mobiscroll.Form> */}
      </div>
    );
  }
}

export default App;
