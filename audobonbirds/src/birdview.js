import React, { Component } from "react";
import "./birdview.css";
import birdData from "./data/birdlist.json";

export default class BIRDVIEW extends Component {
  render() {
    let bird = birdData.find(
      bird => bird.name === this.props.match.params.name
    );
    return (
      <div className="birdview">
        <img
          className="birdpic"
          src={bird.image}
          alt={bird.name}
          style={{ width: 300, height: 300 }}
        ></img>
        <h1 className="name">{bird.name}</h1>
        <h2 className="genus"> ( {bird.genus} )</h2>
        <div className="convo">
          <h3> Conservation Status</h3>
          <p>{bird.conservationStatus}</p>
        </div>
        <a
          className="read"
          href={bird.homepage}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More{" "}
        </a>
      </div>
    );
  }
}
