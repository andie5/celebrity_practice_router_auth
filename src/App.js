import React, { Component } from "react";
import "./App.css";
import juliaRoberts from "./julia-roberts.jpeg";
import tomCruise from "./tom-cruise.jpeg";
import bradPitt from "./brad-pitt.jpeg";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import Home from "./Home";

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
  state = {
    user: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  render() {
    return (
      <div className="App">
        <Home user={this.state.user} />

        <Switch>
          <Route exact path="/" render={() => <div>Hello</div>} />
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
