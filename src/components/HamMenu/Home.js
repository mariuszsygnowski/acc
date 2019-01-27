import React from "react";

import "./css/Home.css";

export default class Home extends React.Component {
  constructor() {
    super();
    // this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }

  //   handleChange(event) {
  //     this.props.receiveText(event.target.value);
  //   }

  render() {
    return (
      <div className={"home"}>
        <p>1Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
        <p>Home</p>
      </div>

      //   <div className={this.props.nameClass}>
      //     <label>
      //       {this.props.labelName}
      //       <input
      //         type="text"
      //         value={this.props.text}
      //         onChange={this.handleChange}
      //         placeholder={this.props.placeholder}
      //       />
      //     </label>
      //   </div>
    );
  }
}
