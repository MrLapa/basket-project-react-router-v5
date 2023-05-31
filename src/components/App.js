import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Players from "./Players";
import Teams from "./Teams";
import Home from "./Home";
import Navbar from "./Navbar";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/players">
          <Players />
        </Route>
        <Route path="/teams">
          <Teams />
        </Route>
      </div>
    </Router>
  );
}
