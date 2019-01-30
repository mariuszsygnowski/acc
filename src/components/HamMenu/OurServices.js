import React from "react";
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import "./css/HamMenu.css";

// mobiscroll.settings = {
//   lang: "auto",
//   theme: "auto",
//   display: "bubble"
// };

export default class OurServices extends React.Component {
  render() {
    return (
      <mobiscroll.Form theme="ios" lang="en-UK">
        <mobiscroll.FormGroup>
          <mobiscroll.FormGroupTitle>Single select</mobiscroll.FormGroupTitle>
          <mobiscroll.Segmented name="range" value="day">
            Day
          </mobiscroll.Segmented>
          <mobiscroll.Segmented name="range" value="week" defaultChecked>
            Week
          </mobiscroll.Segmented>
          <mobiscroll.Segmented name="range" value="range">
            Month
          </mobiscroll.Segmented>
          <mobiscroll.Segmented name="range" value="year">
            Year
          </mobiscroll.Segmented>
        </mobiscroll.FormGroup>
        <mobiscroll.FormGroup>
          <mobiscroll.FormGroupTitle>Multiple select</mobiscroll.FormGroupTitle>

          <mobiscroll.Segmented
            name="week"
            value="su"
            multiSelect={true}
            disabled
          >
            S
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            name="week"
            value="mo"
            multiSelect={true}
            defaultChecked
          >
            M
          </mobiscroll.Segmented>
          <mobiscroll.Segmented name="week" value="te" multiSelect={true}>
            T
          </mobiscroll.Segmented>
          <mobiscroll.Segmented name="week" value="we" multiSelect={true}>
            W
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            name="week"
            value="th"
            multiSelect={true}
            defaultChecked
          >
            T
          </mobiscroll.Segmented>
          <mobiscroll.Segmented name="week" value="fr" multiSelect={true}>
            F
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            name="week"
            value="sa"
            multiSelect={true}
            disabled
          >
            S
          </mobiscroll.Segmented>
        </mobiscroll.FormGroup>
        <mobiscroll.FormGroup>
          <mobiscroll.FormGroupTitle>Text and Icon</mobiscroll.FormGroupTitle>

          <mobiscroll.Segmented name="app" icon="material-star" defaultChecked>
            Featured
          </mobiscroll.Segmented>
          <mobiscroll.Segmented name="app" icon="material-explore">
            Explore
          </mobiscroll.Segmented>
          <mobiscroll.Segmented name="app" icon="material-system-update">
            Updates
          </mobiscroll.Segmented>
        </mobiscroll.FormGroup>
        <mobiscroll.FormGroup>
          <mobiscroll.FormGroupTitle>Icon</mobiscroll.FormGroupTitle>

          <mobiscroll.Segmented name="settings" icon="fa-mail-reply" />
          <mobiscroll.Segmented name="settings" icon="fa-retweet" />
          <mobiscroll.Segmented name="settings" icon="star3" defaultChecked />
          <mobiscroll.Segmented name="settings" icon="cogs" />
        </mobiscroll.FormGroup>
        <mobiscroll.FormGroup>
          <mobiscroll.FormGroupTitle>Disabled</mobiscroll.FormGroupTitle>

          <mobiscroll.Segmented name="org" disabled defaultChecked>
            Idividual
          </mobiscroll.Segmented>
          <mobiscroll.Segmented name="org" disabled>
            Team
          </mobiscroll.Segmented>
          <mobiscroll.Segmented name="org" disabled>
            Company
          </mobiscroll.Segmented>
        </mobiscroll.FormGroup>
        <mobiscroll.FormGroup>
          <mobiscroll.FormGroupTitle>
            Segmented colors
          </mobiscroll.FormGroupTitle>
          <mobiscroll.Segmented
            name="group-primary"
            color="primary"
            icon="home"
            defaultChecked
          >
            Desktop
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            name="group-primary"
            color="primary"
            icon="mobile"
          >
            Mobile
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            name="group-primary"
            color="primary"
            icon="cloud-upload"
          >
            Cloud
          </mobiscroll.Segmented>

          <mobiscroll.Segmented
            color="secondary"
            icon="home"
            name="group-secondary"
            defaultChecked
          >
            Desktop
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            color="secondary"
            icon="mobile"
            name="group-secondary"
          >
            Mobile
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            color="secondary"
            icon="cloud-upload"
            name="group-secondary"
          >
            Cloud
          </mobiscroll.Segmented>

          <mobiscroll.Segmented
            color="success"
            icon="home"
            name="group-success"
            defaultChecked
          >
            Desktop
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            color="success"
            icon="mobile"
            name="group-success"
          >
            Mobile
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            color="success"
            icon="cloud-upload"
            name="group-success"
          >
            Cloud
          </mobiscroll.Segmented>

          <mobiscroll.Segmented
            color="danger"
            icon="home"
            name="group-danger"
            defaultChecked
          >
            Desktop
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            color="danger"
            icon="mobile"
            name="group-danger"
          >
            Mobile
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            color="danger"
            icon="cloud-upload"
            name="group-danger"
          >
            Cloud
          </mobiscroll.Segmented>

          <mobiscroll.Segmented
            color="warning"
            icon="home"
            name="group-warning"
            defaultChecked
          >
            Desktop
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            color="warning"
            icon="mobile"
            name="group-warning"
          >
            Mobile
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            color="warning"
            icon="cloud-upload"
            name="group-warning"
          >
            Cloud
          </mobiscroll.Segmented>

          <mobiscroll.Segmented
            color="info"
            icon="home"
            name="group-info"
            defaultChecked
          >
            Desktop
          </mobiscroll.Segmented>
          <mobiscroll.Segmented color="info" icon="mobile" name="group-info">
            Mobile
          </mobiscroll.Segmented>
          <mobiscroll.Segmented
            color="info"
            icon="cloud-upload"
            name="group-info"
          >
            Cloud
          </mobiscroll.Segmented>
        </mobiscroll.FormGroup>
      </mobiscroll.Form>
    );
  }
}
