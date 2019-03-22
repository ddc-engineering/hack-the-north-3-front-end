const initialState = {};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_QUESTION":
      return { ...state, question: action.payload };
    default:
      return state;
  }
};

export default questionReducer;
