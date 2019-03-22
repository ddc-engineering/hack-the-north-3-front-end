import * as types from "../constants/actionTypes";

const initialState = {};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_QUESTIONNAIRE:
      return { ...state, question: action.payload };
    default:
      return state;
  }
};

export default questionReducer;
