import React from "react";
import { Link } from "react-router-dom";

export default class HomeView extends React.Component {
  render() {
    return (
      <div className="margin-top-title">
        <h1 class="govuk-heading-xl">
          AAAAAH CODE MONKEY GO
          GFRFROIJFFDLKJJJLKJFDSFDSFDNJVAVWCEs;dlkjfds'lkjf;lkjf'lskdjf;kjn;injvs'soijv'seorfkdjvoi
        </h1>
        <p class="govuk-body-l">
          This service is designed to help you find the support that you need.
        </p>
        <Link to="/start" draggable="false" className="govuk-button">
          Get Started
        </Link>
      </div>
    );
  }
}