import { store } from "./redux/reduxStore";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <App store={store} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
