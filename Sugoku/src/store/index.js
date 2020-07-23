import { createStore, combineReducers, applyMiddleware } from "redux";
import BoardReducer from "./reducers/BoardReducer";
import thunk from "redux-thunk";
import UserReducer from "./reducers/UserReducer";

const reducers = combineReducers({
  board: BoardReducer,
  user: UserReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
