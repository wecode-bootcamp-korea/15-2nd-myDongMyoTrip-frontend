import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import NavTransparent from "./Components/Nav/NavTransparent";
import Footer from "./Components/Footer/Footer";
import Accommodation from "./Pages/Accommodation/AccommodationList/AccommodationList";
import AccommodationMain from "./Pages/Accommodation/AccommodationMain/AccommodationMain";
import AccommodationDetail from "./Pages/Accommodation/AccommodationDetail/AccommodationDetail";
import Airline from "./Pages/Airline/Airline";
import EmailSignIn from "./Pages/SignIn/EmailSignIn";
import EmailSignUp from "./Pages/SignUp/EmailSignUp";
import Main from "./Pages/Main/Main";
import AirlineList from "./Pages/Airline/AirlineList/AirlineList";
import AirlineListSelected from "./Pages/Airline/AirlineList/AirlineListSelected";
import SignIn from "./Pages/SignIn/SignIn";

class Routes extends React.Component {
  navHandler = () => {
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/Airline1"
    ) {
      return <Nav transparent />;
    } else {
      return <Nav />;
    }
  };
  render() {
    return (
      <Router>
        {this.navHandler()}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Airline1" component={Airline} />
          <Route exact path="/airlineList" component={AirlineList} />
          <Route
            exact
            path="/airlineListSelected"
            component={AirlineListSelected}
          />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignIn} />
          <Route exact path="/email-signin" component={EmailSignIn} />
          <Route exact path="/email-signup" component={EmailSignUp} />
          <Route exact path="/accommodation_list" component={Accommodation} />
          <Route
            exact
            path="/accommodation_main"
            component={AccommodationMain}
          />
          <Route
            exact
            path="/accommodation_detail/:id"
            component={AccommodationDetail}
          />
          <Route
            exact
            path="/accommodation_detail"
            component={AccommodationDetail}
          />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
