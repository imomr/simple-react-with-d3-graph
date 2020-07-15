import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import "./style.css";

import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Graph from "./graph";
import Navbar from "./Navbar";

import { Switch, Route, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const App = () => {
  return (
    <>
      <Navbar />

      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={{ enter: 100, exit: 300 }}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/graph" component={Graph} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
                <Home />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </>
  );
};

export default App;
