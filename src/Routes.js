import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Accommodation from "./Pages/Accommodation/Accommodation";
import Airline from "./Pages/Airline/Airline";
import EmailSignIn from "./Pages/SignIn/EmailSignIn";
import EmailSignUp from "./Pages/SignUp/EmailSignUp";
import Main from "./Pages/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/accommodation" component={Accommodation} />
          <Route exact path="/airline" component={Airline} />
          <Route exact path="/email-signin" component={EmailSignIn} />
          <Route exact path="/email-signup" component={EmailSignUp} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
