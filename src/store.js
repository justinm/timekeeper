const defaultState = {

};

const reducer = (state, action) => {
  if (typeof state === "undefined") {
    return defaultState;
  }

  return state;
}

export default reducer;