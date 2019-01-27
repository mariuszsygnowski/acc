import React from "react";

export default class Content extends React.Component {
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
      <p>fdsfds</p>
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
