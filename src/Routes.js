import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import NavTransparent from "./Components/Nav/NavTransparent";
import Footer from "./Components/Footer/Footer";
import Accommodation from "./Pages/Accommodation/Accommodation";
import Airline from "./Pages/Airline/Airline";
import EmailSignIn from "./Pages/SignIn/EmailSignIn";
import EmailSignUp from "./Pages/SignUp/EmailSignUp";
import Main from "./Pages/Main/Main";
import AirlineList from "./Pages/Airline/AirlineList/AirlineList";
import AirlineListSelected from "./Pages/Airline/AirlineList/AirlineListSelected";
import SignIn from "./Pages/SignIn/SignIn";

const AIRLINE_NAV = ["/", "/Airline1"];
const ShowAirlineNav = AIRLINE_NAV.includes(window.location.pathname) ? (
  <NavTransparent />
) : (
  <Nav />
);

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {ShowAirlineNav}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/accommodation" component={Accommodation} />
          <Route exact path="/Airline1" component={Airline} />
          <Route exact path="/airlineList" component={AirlineList} />
          <Route
            exact
            path="/airlineListSelected"
            component={AirlineListSelected}
          />
          <Route exact path="/signup" component={SignIn} />
          <Route exact path="/email-signin" component={EmailSignIn} />
          <Route exact path="/email-signup" component={EmailSignUp} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
