const initialState = {
  productList: []
};
export const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, productList: action.payload };
    default:
      return state;
  }
};
