import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import NavTransparent from "./Components/Nav/NavTransparent";
import Footer from "./Components/Footer/Footer";
import Accommodation from "./Pages/Accommodation/Accommodation";
import Airline from "./Pages/Airline/Airline";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Main from "./Pages/Main/Main";
import AirlineList from "./Pages/Airline/AirlineList/AirlineList";

const AIRLINE_NAV = ["/", "/airline"];
const ShowAirlineNav = AIRLINE_NAV.includes(window.location.pathname) ? <NavTransparent /> : <Nav /> 

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {ShowAirlineNav}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/accommodation" component={Accommodation} />
          <Route exact path="/airline" component={Airline} />
          <Route exact path="/airlineList" component={AirlineList} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
