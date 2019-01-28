import React from "react";
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

export default class ContactUs extends React.Component {
  render() {
    return (
      <mobiscroll.Form theme="auto" lang="auto">
        <div className="mbsc-grid mbsc-no-padding">
          <div className="mbsc-row mbsc-justify-content-center">
            <div className="mbsc-col-sm-9 mbsc-col-md-7 mbsc-col-xl-5">
              <mobiscroll.FormGroup>
                <mobiscroll.FormGroupTitle>
                  Underline inputs
                </mobiscroll.FormGroupTitle>
                <mobiscroll.Input
                  type="text"
                  icon="user4"
                  inputStyle="underline"
                  placeholder="Input with label"
                >
                  Name
                </mobiscroll.Input>
                <mobiscroll.Input
                  type="text"
                  icon="material-email"
                  inputStyle="underline"
                  valid={false}
                  placeholder="With error styling"
                >
                  Email
                </mobiscroll.Input>
                <mobiscroll.Input
                  type="password"
                  inputStyle="underline"
                  valid={false}
                  errorMessage="An error occurred"
                  passwordToggle="true"
                  placeholder="With icons and error message"
                  icon='{ "left": "lock2" }'
                >
                  Password
                </mobiscroll.Input>
                <mobiscroll.Input
                  type="text"
                  icon="empty"
                  inputStyle="underline"
                  placeholder="Without label"
                />
                <mobiscroll.Textarea
                  inputStyle="underline"
                  icon="bubble"
                  iconAlign="left"
                  placeholder="Textarea with left icon"
                >
                  About me
                </mobiscroll.Textarea>
                <mobiscroll.Dropdown
                  inputStyle="underline"
                  icon='{ "left": "plus", "right": "close" }'
                >
                  <option>Select with icons</option>
                  <option value="Opel">Opel</option>
                  <option value="Renault">Renault</option>
                  <option value="Citroen">Citroen</option>
                  <option value="Lotus">Lotus</option>
                </mobiscroll.Dropdown>
              </mobiscroll.FormGroup>
              <mobiscroll.FormGroup>
                <mobiscroll.FormGroupTitle>
                  Box inputs
                </mobiscroll.FormGroupTitle>
                <mobiscroll.Input
                  type="text"
                  inputStyle="box"
                  placeholder="Input with label"
                >
                  Name
                </mobiscroll.Input>
                <mobiscroll.Input
                  type="text"
                  inputStyle="box"
                  valid={false}
                  placeholder="With error styling"
                >
                  Email
                </mobiscroll.Input>
                <mobiscroll.Input
                  type="password"
                  inputStyle="box"
                  valid={false}
                  errorMessage="An error occurred"
                  passwordToggle="true"
                  placeholder="With icons and error message"
                  icon='{ "left": "lock2" }'
                >
                  Password
                </mobiscroll.Input>
                <mobiscroll.Input
                  type="text"
                  inputStyle="box"
                  placeholder="Without label"
                />
                <mobiscroll.Textarea
                  inputStyle="box"
                  icon="bubble"
                  iconAlign="left"
                  placeholder="Textarea with left icon"
                >
                  About me
                </mobiscroll.Textarea>
                <mobiscroll.Dropdown
                  inputStyle="box"
                  icon="plus"
                  iconAlign="right"
                >
                  <option>Select with right icon</option>
                  <option value="Opel">Opel</option>
                  <option value="Renault">Renault</option>
                  <option value="Citroen">Citroen</option>
                  <option value="Lotus">Lotus</option>
                </mobiscroll.Dropdown>
              </mobiscroll.FormGroup>
              <mobiscroll.FormGroup>
                <mobiscroll.FormGroupTitle>
                  Outline inputs
                </mobiscroll.FormGroupTitle>
                <mobiscroll.Input
                  type="text"
                  inputStyle="outline"
                  placeholder="Input with label"
                >
                  Name
                </mobiscroll.Input>
                <mobiscroll.Input
                  type="text"
                  inputStyle="outline"
                  valid={false}
                  placeholder="With error styling"
                >
                  Email
                </mobiscroll.Input>
                <mobiscroll.Input
                  type="password"
                  inputStyle="outline"
                  valid={false}
                  errorMessage="An error occurred"
                  passwordToggle="true"
                  placeholder="With icons and error message"
                  icon='{ "left": "lock2" }'
                >
                  Password
                </mobiscroll.Input>
                <mobiscroll.Input
                  type="text"
                  inputStyle="outline"
                  placeholder="Without label"
                />
                <mobiscroll.Textarea
                  inputStyle="outline"
                  icon="bubble"
                  iconAlign="left"
                  placeholder="Textarea with left icon"
                >
                  About me
                </mobiscroll.Textarea>
                <mobiscroll.Dropdown
                  inputStyle="outline"
                  icon="plus"
                  iconAlign="right"
                >
                  <option>Select with right icon</option>
                  <option value="Opel">Opel</option>
                  <option value="Renault">Renault</option>
                  <option value="Citroen">Citroen</option>
                  <option value="Lotus">Lotus</option>
                </mobiscroll.Dropdown>
              </mobiscroll.FormGroup>
            </div>
          </div>
        </div>
      </mobiscroll.Form>
    );
  }
}
