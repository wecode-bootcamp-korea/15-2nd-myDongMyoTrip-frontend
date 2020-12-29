import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accommodation from "./Pages/Accommodation/Accommodation";
import Airline from "./Pages/Airline/Airline";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Main from "./Pages/Main/Main";

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
