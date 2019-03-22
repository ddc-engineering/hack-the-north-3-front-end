import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducers/rootReducer";
import ReduxThunk from "redux-thunk";

const configureStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(ReduxThunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__() || compose
    )
  );
};

export default configureStore;
