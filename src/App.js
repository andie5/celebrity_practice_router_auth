import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import juliaRoberts from "./julia-roberts.jpeg";
import tomCruise from "./tom-cruise.jpeg";
import bradPitt from "./brad-pitt.jpeg";
import { Route, Switch, Link } from "react-router-dom";

//Function but also stateless component?
function Actor(props) {
  return (
    <div>
      <h1>
        {props.name} ({props.age})
      </h1>
      <img src={props.photo} />
    </div>
  );
}

function Page404() {
  return <div>Oops</div>;
}

function Product(props) {
  return <div>Product: {props.match.params.iddddd}</div>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Celebrity App</h1>
        <Link to="/juliaRoberts">Julia Roberts</Link>
        <Link to="/tomCruise">Tom Cruise</Link>
        <Link to="/bradPitt">Brad Pitt</Link>

        <Switch>
          <Route exact path="/" render={() => <div>Your on Home Page!</div>} />
          <Route
            exact
            path="/products"
            render={() => <div>Welcome to Products section!</div>}
          />
          <Route path="/products/:iddddd" component={Product} />
          <Route
            path="/juliaRoberts"
            render={() => (
              <Actor name="Julia Roberts" photo={juliaRoberts} age={51} />
            )}
          />
          <Route
            path="/tomCruise"
            render={() => (
              <Actor name="Tom Cruise" photo={tomCruise} age={56} />
            )}
          />
          <Route
            path="/bradPitt"
            render={() => <Actor name="Brad Pitt" photo={bradPitt} age={55} />}
          />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
