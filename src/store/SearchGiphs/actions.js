import axios from "axios";

export default function fetchAllGiphs(query, offset = 0) {
  return async (dispatch, getState) => {
    dispatch(resetGiphs());
    const data = await axios.get(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=vlAPeikvL2Xp8WEmrDiyy7DRfUOvHabH&limit=33&offset=${offset}`
    );
    dispatch(setGiphs(data.data));
  };
}

export function loadMore(q, offs) {
  return async (dispatch, getState) => {
    const data = await axios.get(
      `https://api.giphy.com/v1/gifs/search?q=${q}&api_key=vlAPeikvL2Xp8WEmrDiyy7DRfUOvHabH&limit=33&offset=${offs}`
    );
    dispatch(setGiphs(data.data));
  };
}

const setGiphs = (data) => {
  return {
    type: "SET_GIPHS",
    payload: data.data,
  };
};

const resetGiphs = () => {
  return {
    type: "RESET_GIPHS",
  };
};
