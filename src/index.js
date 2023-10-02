import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./Store/store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

store.subscribe(() => console.log(store.getState()));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
