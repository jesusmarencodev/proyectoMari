import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../screems/Home";
import Reports from "../screems/Reports";

const AppRouter = () => {
  return (
<Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={ Home } /> 
          <Route exact path='/home' component={ Home } /> 
          <Route exact path='/reports' component={ Reports } /> 
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
