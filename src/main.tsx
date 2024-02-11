import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BookingsContextProvider } from "./context/BookingsContext.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookingsContextProvider>
      <App />
    </BookingsContextProvider>
  </React.StrictMode>
);
