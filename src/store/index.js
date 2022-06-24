import { createStore, combineReducers } from "redux";
import GameXucXac from "../store/reducers/GameXucXac";
import GameOanTuXi from "../store/reducers/GameOanTuXi";
const reducer = combineReducers({
  // Khai bao reducer con
  GameXucXac,
  GameOanTuXi,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
