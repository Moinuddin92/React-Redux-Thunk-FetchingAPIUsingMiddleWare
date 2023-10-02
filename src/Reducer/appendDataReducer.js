const appendIntialState = {
  array_list: []
};
export const appendDataReducer = (state = appendIntialState, action) => {
  switch (action.type) {
    case "APPEND_DATA":
      return { ...state, array_list: [...state.array_list, "Gaurav"] };
    default:
      return state;
  }
};
