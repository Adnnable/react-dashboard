import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IframePage from "./pages/IframePage";
import ListPage from "./pages/ListPage";
import DetailsPage from "./pages/DetailsPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/run/:id" element={<DetailsPage />} />
        <Route path="/iframe/:id" element={<IframePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
