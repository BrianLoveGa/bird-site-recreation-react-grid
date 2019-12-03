import React, { Component } from "react";
import { Link } from "react-router-dom";
import birdData from "./data/birdlist.json";
import "./homeview.css";

export default class HOMEVIEW extends Component {
  render() {
    let birds = birdData.map((bird, i) => {
      return (
        <div className="birdPics" key={i}>
          <Link to={`/bird/${bird.name}`}>
            <img
              src={bird.image}
              alt={bird.name}
              style={{ width: 200, height: 200 }}
            ></img>
          </Link>
        </div>
      );
    });
    return <div className="birdPicsCntr">{birds}</div>;
  }
}

//// {{marginRight: spacing + 'em'}}
