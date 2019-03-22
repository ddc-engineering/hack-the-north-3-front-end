import * as types from "../constants/actionTypes";
import APIEndpoints from "../constants/endpoints";

const questionnaireStartEvent = payload => {
  return { types: types.START_QUESTIONNAIRE, payload };
};

export const startQuestionnaire = () => {
  return dispatch => {
    fetch(APIEndpoints.start).then(response => {
      console.log(response);
    });
  };
};

/* TODO: Switch to Axios in order to set the session ID */
