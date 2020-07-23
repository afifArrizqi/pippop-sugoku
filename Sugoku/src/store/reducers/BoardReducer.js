import {
  SET_BOARD,
  SET_SUBMIT_BOARD,
  VALIDATE_BOARD,
  REMOVE_BOARD,
} from "../actions_type";

const defaultState = {
  board: [],
  submitBoard: [],
  status: "unsolved",
};

export default function BoardReducer(state = defaultState, { type, payload }) {
  switch (type) {
    case SET_BOARD:
      return { ...state, board: payload.data };
    case SET_SUBMIT_BOARD:
      return { ...state, submitBoard: payload.data };
    case VALIDATE_BOARD:
      return { ...state, status: payload.data };
    default:
      return state;
  }
}
