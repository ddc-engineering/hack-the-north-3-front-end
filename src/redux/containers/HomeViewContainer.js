import { connect } from "react-redux";
import { startQuestionnaire } from "../actions/questionActions";
import HomeView from "../../presentation/views/HomeView.react";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    questionnaireReady: state.question.ready
  };
};
const mapDispatchToProps = dispatch => {
  return {
    startQuestionnaire: () => dispatch(startQuestionnaire())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(HomeView)
);
