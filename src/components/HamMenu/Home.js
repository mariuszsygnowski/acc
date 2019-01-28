import React from "react";
import { Image, Transformation } from "cloudinary-react";

import "./css/Home.css";

export default class Home extends React.Component {
  constructor() {
    super();
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      img:
        "http://www.milner-smeaton.co.uk/images/ms1920-crop-u949113.jpg?crc=4169677626"
    };
  }

  //   handleChange(event) {
  //     this.props.receiveText(event.target.value);
  //   }

  render() {
    return (
      <div className="home">
        {/* <ResponsiveImage
          src="http://www.milner-smeaton.co.uk/images/ms1920-crop-u949113.jpg?crc=4169677626"
          width={2400}
          height={1238}
          >
        </ResponsiveImage> */}

        <div className="home__firstSection">
          <div className="home__firstSection__image">
            <h2>GABHEN ACC LIMITED</h2>
          </div>
        </div>

        <p>
          GABHEN ACC LIMITED has a growing reputation as one of the region's
          most effective accountancy firms for individual clients and
          businesses.
        </p>

        <p>
          {" "}
          Our firm expertly attends to all your taxation and business queries.
          Thanks to the established expertise of our experts, our dedication and
          many years of experience in consulting and assessment, we can offer
          you support that you can rely on both with standard matters concerning
          your enterprise and complex business management assignments. We thus
          value highly the loyal consultancy of our clients.
        </p>
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
    );
  }
}
