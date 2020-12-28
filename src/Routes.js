import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accommodation from "../src/Pages/Accommodation";
import Airline from "../src/Pages/Airline";
import Login from "../src/Pages/Login";
import SignUp from "../src/Pages/SignUp";
import Main from "../src/Pages/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/accommodation" component={Accommodation} />
          <Route exact path="/airline" component={Airline} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
