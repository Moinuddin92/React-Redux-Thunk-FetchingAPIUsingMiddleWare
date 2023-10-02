import { useEffect } from "react";
import {
  Decrement_function,
  Increment_function,
  append_Data_Function,
  fetchThunkFunction
} from "./Actions/actions";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.counter);
  useEffect(() => {
    dispatch(fetchThunkFunction());
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>{state}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => dispatch(Increment_function())}>INCREMENT</button>
      <button onClick={() => dispatch(Decrement_function())}>Decrement</button>
      <button onClick={() => dispatch(append_Data_Function())}>
        Append Data
      </button>
    </div>
  );
}

// useDispatch
