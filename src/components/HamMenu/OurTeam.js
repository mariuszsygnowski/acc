import React from "react";
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

export default class OurTeam extends React.Component {
  action = () => {
    mobiscroll.toast({
      message: "Button was clicked"
    });
  };
  render() {
    return (
      <mobiscroll.Form theme="auto" lang="auto">
        <mobiscroll.FormGroup>
          <mobiscroll.FormGroupTitle>Buttons</mobiscroll.FormGroupTitle>
          <div className="mbsc-btn-group">
            <mobiscroll.Button>Button</mobiscroll.Button>
            <mobiscroll.Button disabled>Disabled</mobiscroll.Button>
          </div>
          <div className="mbsc-btn-group">
            <mobiscroll.Button onClick={this.action}>
              Click for action
            </mobiscroll.Button>
          </div>
        </mobiscroll.FormGroup>
        <mobiscroll.FormGroup>
          <mobiscroll.FormGroupTitle>
            Full width buttons
          </mobiscroll.FormGroupTitle>
          <div className="mbsc-btn-group-block">
            <mobiscroll.Button>Full width button</mobiscroll.Button>
            <mobiscroll.Button disabled>Disabled full width</mobiscroll.Button>
          </div>
        </mobiscroll.FormGroup>
        <mobiscroll.FormGroup>
          <mobiscroll.FormGroupTitle>
            Justified buttons
          </mobiscroll.FormGroupTitle>
          <div className="mbsc-btn-group-justified">
            <mobiscroll.Button>Tag</mobiscroll.Button>
            <mobiscroll.Button>Favorite</mobiscroll.Button>
            <mobiscroll.Button>Flag</mobiscroll.Button>
          </div>
        </mobiscroll.FormGroup>
        <mobiscroll.FormGroup>
          <mobiscroll.FormGroupTitle>Icons</mobiscroll.FormGroupTitle>
          <div className="mbsc-btn-group">
            <mobiscroll.Button icon="tag" />
            <mobiscroll.Button icon="heart" />
            <mobiscroll.Button icon="flag" disabled />
          </div>
          <div className="mbsc-btn-group">
            <mobiscroll.Button icon="tag">Tag</mobiscroll.Button>
            <mobiscroll.Button icon="heart">Favorite</mobiscroll.Button>
            <mobiscroll.Button icon="flag" disabled>
              Flag
            </mobiscroll.Button>
          </div>
        </mobiscroll.FormGroup>
        <mobiscroll.FormGroup>
          <mobiscroll.FormGroupTitle>Flat buttons</mobiscroll.FormGroupTitle>
          <div className="mbsc-btn-group">
            <mobiscroll.Button flat={true}>Flat</mobiscroll.Button>
            <mobiscroll.Button flat={true} icon="arrow-left5">
              Flat & Icon
            </mobiscroll.Button>
            <mobiscroll.Button flat={true} icon="arrow-left5" />
            <mobiscroll.Button flat={true} icon="key2" disabled />
            <mobiscroll.Button flat={true} disabled>
              Flat disabled
            </mobiscroll.Button>
          </div>
        </mobiscroll.FormGroup>
        <mobiscroll.FormGroup>
          <mobiscroll.FormGroupTitle>Outline buttons</mobiscroll.FormGroupTitle>
          <div className="mbsc-btn-group">
            <mobiscroll.Button outline={true}>Outline</mobiscroll.Button>
            <mobiscroll.Button outline={true} icon="arrow-left5">
              Outline & Icon
            </mobiscroll.Button>
            <mobiscroll.Button outline={true} icon="arrow-left5" />
            <mobiscroll.Button outline={true} icon="key2" disabled />
            <mobiscroll.Button outline={true} disabled>
              Outline disabled
            </mobiscroll.Button>
          </div>
        </mobiscroll.FormGroup>
      </mobiscroll.Form>
    );
  }
}
