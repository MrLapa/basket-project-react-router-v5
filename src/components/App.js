import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Players from "./Players";
import Teams from "./Teams";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import TeamPage from "./TeamPage";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/players">
            <Players />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/:teamId">
            <TeamPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
