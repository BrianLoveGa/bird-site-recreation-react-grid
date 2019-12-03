import React, { Component } from "react";
import "./birdview.css";

export default class Newbird extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Genus: "",
      Image: "",
      Homepage: "",
      Status: ""
    };
    this.myChangeHandler = this.myChangeHandler.bind(this);
  }

  myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  render() {
    return (
      <div>
        <div className="newbirdpage">
          <h2 className="about">Add a New Bird</h2>
          <br></br>
          <form>
            <p>Name</p>
            <input
              className="field"
              type="text"
              name="name"
              onChange={this.myChangeHandler}
            />
            <p>Genus</p>
            <input
              className="field"
              type="text"
              name="genus"
              onChange={this.myChangeHandler}
            />
            <p>Image</p>
            <input
              className="field"
              type="text"
              name="genus"
              onChange={this.myChangeHandler}
            />
            <p>Homepage</p>
            <input
              className="field"
              type="text"
              name="genus"
              onChange={this.myChangeHandler}
            />
            <label>
              <p>Conservation status</p>
              <p>
                <textarea
                  className="bigfield"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </p>
            </label>

            <br></br>
            <button className="read" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
