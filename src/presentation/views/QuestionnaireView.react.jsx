import React from "react";
import CheckboxQuestion from "../CheckboxQuestion.react";
import RadioQuestion from "../RadioQuestion.react";
import Cookie from "universal-cookie";

export default class QuestionnaireView extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onSubmitHandler(event) {
    event.preventDefault();
    const { respondToApi } = this.props;
    respondToApi(this.state);
  }
  handleChange(name, value) {
    this.setState({ name, value });
  }
  componentDidMount() {
    const cookie = new Cookie();
    const sessionId = cookie.get("session-cookie");
    if (sessionId) {
      const { restoreSession } = this.props;
      restoreSession(sessionId);
    }
  }
  renderQuestionContent() {
    const { pageView } = this.props;
    return pageView.questions.reduce((returnQuestions, questionData) => {
      switch (questionData.type) {
        case "checkbox":
          returnQuestions.push(<CheckboxQuestion {...questionData} />);
          return returnQuestions;
        case "radio":
          returnQuestions.push(
            <RadioQuestion {...questionData} changeInput={this.handleChange} />
          );
          return returnQuestions;
        default:
          return returnQuestions;
      }
    }, []);
  }
  render() {
    const { pageView, ready } = this.props;
    if (!ready) {
      return (
        <div className="question-container">
          <h2 className="govuk-heading-l">Waiting for Questionnaire...</h2>
        </div>
      );
    } else {
      return (
        <form onSubmit={this.onSubmitHandler}>
          <div className="question-container">
            <h2 className="govuk-heading-l">{pageView.title}</h2>
            {pageView.hint ? (
              <p className="govuk-body-l">{pageView.hint}</p>
            ) : null}
            <hr className="govuk-section-break govuk-section-break--visible" />
            <div className="govuk-form-group margin-top-form">
              {this.renderQuestionContent()}
            </div>
            <button type="submit" class="govuk-button">
              Continue
            </button>
          </div>
        </form>
      );
    }
  }
}
