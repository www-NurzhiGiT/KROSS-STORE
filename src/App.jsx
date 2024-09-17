import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./router";
import "./App.css";

function App() {
  return (
    <div className="app-wrap">
      <div className="bor">
        <RouterProvider router={myRouter} />
      </div>
    </div>
  );
}

export default App;
