import { SET_BOARD, SET_SUBMIT_BOARD, VALIDATE_BOARD } from "../actions_type";

const encodeBoard = (board) =>
  board.reduce(
    (result, row, i) =>
      result +
      `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? "" : "%2C"}`,
    ""
  );
const encodeParams = (params) =>
  Object.keys(params)
    .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
    .join("&");

export function SetBoard(difficulty) {
  return (dispatch) => {
    fetch(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`)
      .then((result) => result.json())
      .then((data) => {
        dispatch({
          type: SET_BOARD,
          payload: {
            data: data.board,
          },
        });
        dispatch({
          type: SET_SUBMIT_BOARD,
          payload: {
            data: data.board,
          },
        });
      })
      .catch((err) => console.log(err));
  };
}

export function SetSubmitBoard(newI, newJ, value) {
  return async (dispatch, getState) => {
    if (newI && newJ && value) {
      const submitBoard = getState().board.submitBoard;
      const board = submitBoard.map((row1, i) => {
        return row1.map((row2, j) => {
          return newI === i && newJ === j ? value : row2;
        });
      });
      dispatch({
        type: SET_SUBMIT_BOARD,
        payload: {
          data: board,
        },
      });
    } else {
      const board = getState().board.board;
      dispatch({
        type: SET_SUBMIT_BOARD,
        payload: {
          data: board,
        },
      });
    }
  };
}

export function SolutionBoard(data) {
  return (dispatch) => {
    fetch("https://sugoku.herokuapp.com/solve", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encodeParams(data),
    })
      .then((result) => result.json())
      .then((data) => {
        dispatch({
          type: SET_BOARD,
          payload: {
            data: data.solution,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function ValidateBoard(data, navigate) {
  return (dispatch) => {
    fetch("https://sugoku.herokuapp.com/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encodeParams(data),
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        dispatch({
          type: VALIDATE_BOARD,
          payload: { data: data.status },
        });
        navigate("Result");
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
