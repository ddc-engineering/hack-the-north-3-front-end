import React from "react";
import HomeView from "./views/HomeView.react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuestionnaireViewContainer from "../redux/containers/QuestionnaireViewContainer";

const RouterComponent = () => {
  return (
    <div className="govuk-width-container">
      <Router>
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/start" exact component={QuestionnaireViewContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default RouterComponent;
