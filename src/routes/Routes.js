import { React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import JobExplore from "../Components/JobExplore/jobExplore";
import LoginPage from "../Components/Login/loginPage";
import BrokenLink from "../shared/brokenLink/index";

function MainRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>

        <Route path="/JobExplore">
          <JobExplore />
        </Route>
        <Route exact default component={BrokenLink}></Route>
      </Switch>
    </Router>
  );
}

export default MainRoutes;
