const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_GIPHS":
      return [...state, ...payload];
    case "RESET_GIPHS":
      return initialState;

    default:
      return state;
  }
};
