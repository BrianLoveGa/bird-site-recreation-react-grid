import React, { Component } from "react";
import { Route, Link, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Birdview from "./Birdview";
import Homeview from "./Homeview.js";
import Newbird from "./Newbird";
import birdData from "./data/birdlist.json";

export default class APP extends Component {
  render() {
    return (
      <div>
        <header className="App-header">Audubon Society</header>
        <div className="nav">
          <div className="navItem">
            <Link to="/">Birds</Link>
          </div>
          <div className="navItem">
            <Link className="newbird" to="/bird/new">
              (Add a new bird)
            </Link>
          </div>
        </div>

        <div className="main">
          <Switch>
            <Route exact path="/bird" component={Homeview} />
            <Route
              exact
              path="/bird/new"
              render={props => <Newbird {...props} birdData={birdData} />}
            />
            <Route
              exact
              path="/bird/:name"
              render={props => <Birdview {...props} birdData={birdData} />}
            />

            <Route path="/*" render={() => <Redirect to="/bird" />} />
          </Switch>
        </div>
      </div>
    );
  }
}
