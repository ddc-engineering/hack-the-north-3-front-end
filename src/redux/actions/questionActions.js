import * as types from "../constants/actionTypes";
import APIEndpoints from "../constants/endpoints";
import axios from "axios";
import Cookies from "universal-cookie";
import history from "../../history";

const questionnaireStartEvent = payload => {
  const cookies = new Cookies();
  cookies.set("session-cookie", payload.sessionId);
  history.push("/start");
  return { type: types.START_QUESTIONNAIRE, payload };
};

export const startQuestionnaire = () => {
  return dispatch => {
    axios(APIEndpoints.start, {
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        dispatch(questionnaireStartEvent(response.data));
      })
      .catch(error => {
        console.error(error);
      });
  };
};

/* TODO: Switch to Axios in order to set the session ID */
