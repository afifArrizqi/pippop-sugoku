import { SET_USER, PLAYING_USER } from "../actions_type";

const defaultState = {
  user: "",
  playing: false,
};

export default function UserReducer(state = defaultState, { type, payload }) {
  switch (type) {
    case SET_USER:
      return { ...state, user: payload.data };
    case PLAYING_USER:
      return { ...state, playing: payload.data };
    default:
      return state;
  }
}
