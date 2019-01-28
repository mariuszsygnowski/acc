import React from "react";
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

export default class OurServices extends React.Component {
  render() {
    return (
      <div>
        <mobiscroll.Note className="mbsc-align-center" color="primary">
          Use collapsible groups for segmenting long forms and to hide content.
        </mobiscroll.Note>

        <mobiscroll.Form theme="auto" lang="auto">
          <div className="mbsc-btn-group-block">
            <mobiscroll.Button onClick={this.toggleFirst}>
              Toggle first group
            </mobiscroll.Button>
            <mobiscroll.Button onClick={this.closeAll}>
              Close all groups
            </mobiscroll.Button>
          </div>
          <mobiscroll.FormGroup ref="contactDetails" collapsible open>
            <mobiscroll.FormGroupTitle>
              Contact details
            </mobiscroll.FormGroupTitle>
            <mobiscroll.FormGroupContent>
              <mobiscroll.Input placeholder="Your first name">
                First Name
              </mobiscroll.Input>
              <mobiscroll.Input placeholder="Your last name">
                Last Name
              </mobiscroll.Input>
              <mobiscroll.Input placeholder="Company if applicable">
                Company
              </mobiscroll.Input>
              <mobiscroll.Input type="tel" placeholder="Your phone number">
                Phone
              </mobiscroll.Input>
              <mobiscroll.Input type="email" placeholder="Your email address">
                Email
              </mobiscroll.Input>
            </mobiscroll.FormGroupContent>
          </mobiscroll.FormGroup>

          <mobiscroll.FormGroup ref="shippingDetails" collapsible>
            <mobiscroll.FormGroupTitle>
              Shipping address
            </mobiscroll.FormGroupTitle>
            <mobiscroll.FormGroupContent>
              <mobiscroll.Textarea>Shipping address</mobiscroll.Textarea>
              <mobiscroll.Input placeholder="City">City</mobiscroll.Input>
              <mobiscroll.Input placeholder="State/Region">
                State/Region
              </mobiscroll.Input>
              <mobiscroll.Input placeholder="Zip/Postal code">
                Zip
              </mobiscroll.Input>

              <mobiscroll.Dropdown label="Country">
                <option>Please Select</option>
              </mobiscroll.Dropdown>
            </mobiscroll.FormGroupContent>
          </mobiscroll.FormGroup>

          <mobiscroll.FormGroup ref="paymentDetails" collapsible>
            <mobiscroll.FormGroupTitle>
              Payment details
            </mobiscroll.FormGroupTitle>
            <mobiscroll.FormGroupContent>
              <mobiscroll.Input placeholder="Name on card">
                Name
              </mobiscroll.Input>
              <mobiscroll.Input placeholder="Credit card number">
                Card
              </mobiscroll.Input>
              <mobiscroll.Dropdown label="Expiration">
                <option>Select</option>
                <option>12/2018</option>
                <option>01/2019</option>
                <option>02/2019</option>
              </mobiscroll.Dropdown>
              <mobiscroll.Input type="number" placeholder="3-digit CVV">
                Security
              </mobiscroll.Input>
            </mobiscroll.FormGroupContent>
          </mobiscroll.FormGroup>
        </mobiscroll.Form>
      </div>
    );
  }

  closeAll = () => {
    this.refs.contactDetails.instance.hide();
    this.refs.shippingDetails.instance.hide();
    this.refs.paymentDetails.instance.hide();
  };

  toggleFirst = () => {
    this.refs.contactDetails.instance.toggle();
  };
}
