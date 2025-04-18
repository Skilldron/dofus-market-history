import { createRoot } from "react-dom/client";
import Overlay from "./features/overlay/overlay";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./config/store";

const root = createRoot(document.body);
root.render(
  <StrictMode>
    <Provider store={store}>
      <Overlay />
    </Provider>
  </StrictMode>
);
