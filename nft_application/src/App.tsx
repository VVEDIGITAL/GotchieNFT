import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/error404/errorPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { IslandCheckPage } from "./pages/islandCheck/islandCheck";
import { Mint } from "./pages/mint/mint";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mint" element={<Mint />} />
      <Route path="/land" element={<IslandCheckPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
