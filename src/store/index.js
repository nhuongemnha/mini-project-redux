import { createStore, combineReducers } from "redux";
import GameXucXac from "../store/reducers/GameXucXac";

const reducer = combineReducers({
  // Khai bao reducer con
  GameXucXac,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
