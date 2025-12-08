import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; 
import TeamsPage from "../Components/Pages/TeamsPage";
import "./index.css";
import GalleryPage from "../Components/Gallery/GalleryPage";
import ScrollToTop from "./ScrollToTop";   // ⭐ ADD THIS


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />   {/* ⭐ MUST BE INSIDE ROUTER BUT OUTSIDE ROUTES */}
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/gallery" element={<GalleryPage />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
