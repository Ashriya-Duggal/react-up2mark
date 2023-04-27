import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ViewPage from "./Pages/ViewPage";
import SingleRecordPage from "./Pages/SingleRecordPage";

function PagesRoute() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="view" element={<ViewPage />} />
          <Route path="singleRecord" element={<SingleRecordPage />} />
        </Routes>
      </BrowserRouter>{" "}
    </div>
  );
}

export default PagesRoute;
