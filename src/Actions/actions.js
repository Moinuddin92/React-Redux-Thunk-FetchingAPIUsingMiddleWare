export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const APPEND_DATA = "APPEND_DATA";

export const FETCH_DATA = "FETCH_DATA";

//  actions return plain object , type , payload

export const Increment_function = () => {
  return {
    type: INCREMENT
  };
};

export const Decrement_function = () => {
  return {
    type: DECREMENT
  };
};

export const append_Data_Function = () => {
  return {
    type: APPEND_DATA
  };
};

export const fetch_data = (payload) => {
  console.log("payload", payload);
  return {
    type: FETCH_DATA,
    payload
  };
};

// thunk function
export const fetchThunkFunction = () => {
  return (dispatch) => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => dispatch(fetch_data(res)));
  };
};
