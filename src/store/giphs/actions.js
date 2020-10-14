import axios from "axios";

export default function fetchAllGiphs(query, limit = 25, offset) {
  return async (dispatch, getState) => {
    if (query) {
      dispatch(resetGiphs());
    }
    const data = await axios.get(
      `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=vlAPeikvL2Xp8WEmrDiyy7DRfUOvHabH&limit=${limit}&offset=${offset}`
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
