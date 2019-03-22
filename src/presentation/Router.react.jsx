import React from "react";
import HomeView from "./views/HomeView.react";
import QuestionnaireView from "./views/QuestionnaireView.react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const RouterComponent = () => {
  return (
    <div className="govuk-width-container">
      <Router>
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/start" exact component={QuestionnaireView} />
        </Switch>
      </Router>
    </div>
  );
};

export default RouterComponent;
