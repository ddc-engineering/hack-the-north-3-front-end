import * as types from "../constants/actionTypes";

const initialState = { ready: false };

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_QUESTIONNAIRE:
      return { ...state, ready: true, pageView: action.payload.pageView };
    default:
      return state;
  }
};

export default questionReducer;
