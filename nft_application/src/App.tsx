import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/error404/errorPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { Mint } from "./pages/mint/mint";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mint" element={<Mint />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
