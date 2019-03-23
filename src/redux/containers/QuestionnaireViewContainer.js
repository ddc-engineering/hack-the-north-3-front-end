import { connect } from "react-redux";
import QuestionnaireView from "../../presentation/views/QuestionnaireView.react";
import { startQuestionnaire } from "../actions/questionActions";

const mapStateToProps = state => {
  return {
    pageView: state.question.pageView,
    ready: state.question.ready
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startQuestionnaire: () => dispatch(startQuestionnaire())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionnaireView);
