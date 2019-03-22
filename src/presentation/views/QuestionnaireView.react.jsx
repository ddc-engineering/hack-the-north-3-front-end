import React from "react";
import CheckboxQuestion from "../CheckboxQuestion.react";
import RadioQuestion from "../RadioQuestion.react";

const questionSchema = {
  title: "Demographics",
  hint: "AdditionalInformation",
  questions: [
    {
      title: "Are you male or female?",
      hint: "This is a test radio hint",
      type: "radio",
      name: "gender",
      inline: true,
      options: [
        {
          id: 1,
          value: "male",
          hint: "Male Hint",
          text: "Male"
        },
        {
          id: 2,
          hint: "Female hint",
          value: "female",
          text: "Female"
        },
        {
          id: 3,
          hint: "Other hint",
          value: "other",
          text: "Other"
        }
      ]
    }
  ]
};

export default class QuestionnaireView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: questionSchema
    };
  }
  renderQuestionContent() {
    const { question } = this.state;
    return question.questions.reduce((returnQuestions, questionData) => {
      switch (questionData.type) {
        case "checkbox":
          returnQuestions.push(<CheckboxQuestion {...questionData} />);
          return returnQuestions;
        case "radio":
          returnQuestions.push(<RadioQuestion {...questionData} />);
          return returnQuestions;
        default:
          return returnQuestions;
      }
    }, []);
  }
  render() {
    const { question } = this.state;
    return (
      <div className="question-container">
        <h2 className="govuk-heading-l">{question.title}</h2>
        {questionSchema.hint ? (
          <p className="govuk-body-l">{questionSchema.hint}</p>
        ) : null}
        <hr className="govuk-section-break govuk-section-break--visible" />
        <div className="govuk-form-group margin-top-form">
          {this.renderQuestionContent()}
        </div>
        <button type="submit" class="govuk-button">
          Continue
        </button>
      </div>
    );
  }
}
