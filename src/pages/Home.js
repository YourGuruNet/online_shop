import React, { Component } from "react";
import $ from "jquery";
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../Images/slider1.jpg";
import slider2 from "../Images/slider2.jpg";
import slider3 from "../Images/slider3.jpg";
import styled from "styled-components";

export class Home extends Component {
  componentDidMount() {
    $();
  }

  render() {
    return (
      <div>
        <div className="container-fluid" style={{ padding: "0", margin: "0" }}>
          <Carousel>
            <Carousel.Item style={{ height: "600px" }}>
              <img
                style={{ height: "600px" }}
                className="d-block w-100"
                src={slider2}
                alt="test"
              />
              <Carousel.Caption>
                <SliderDescription>Best Phones in the town!</SliderDescription>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "600px" }}>
              <img
                style={{ height: "600px" }}
                className="d-block w-100"
                src={slider1}
                alt="test"
              />
              <Carousel.Caption>
                <SliderDescription>
                  Come and grabs your favorite...
                </SliderDescription>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "600px" }}>
              <img
                style={{ height: "600px" }}
                className="d-block w-100"
                src={slider3}
                alt="test"
              />
              <Carousel.Caption>
                <SliderDescription>Free shipping worldwide</SliderDescription>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}
const SliderDescription = styled.h3`
  background-color: black;
  width: 20rem;
`;

export default Home;
