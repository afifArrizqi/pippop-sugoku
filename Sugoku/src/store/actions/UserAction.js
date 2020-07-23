import { SET_USER, PLAYING_USER } from "../actions_type";

export function SetUser(name) {
  return {
    type: SET_USER,
    payload: {
      data: name,
    },
  };
}

export function IsPlaying(data) {
  console.log(">>>>>>>>>>>>>>>", String(data));
  return {
    type: PLAYING_USER,
    payload: { data },
  };
}
