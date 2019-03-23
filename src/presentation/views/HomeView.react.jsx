import React from "react";
import { withRouter } from "react-router-dom";

class HomeView extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.startQuestionnaire = this.startQuestionnaire.bind(this);
  }
  startQuestionnaire() {
    const { startQuestionnaire, history } = this.props;
    startQuestionnaire();
    history.push("/start");
  }
  render() {
    return (
      <div className="margin-top-title">
        <h1 class="govuk-heading-xl">Getting back to work.</h1>
        <p class="govuk-body-l">
          This service is designed to help you find the support that you need.
        </p>
        <button
          onClick={this.startQuestionnaire}
          draggable="false"
          className="govuk-button"
        >
          Get Started
        </button>
      </div>
    );
  }
}

export default HomeView;
