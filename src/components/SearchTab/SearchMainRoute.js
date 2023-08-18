import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchFormMain from "./SearchTab/SearchFormMain";
import DestinationRoute from "./SearchTab/DestinationRoute";
import SearchCondition from "./SearchTab/SearchCondition";

export default function SearchMainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DestinationRoute />}>
          <Route path="/SearchFormMain" element={<SearchFormMain />} />
        </Route>

        <Route
          path="/SearchCondition/:destinationId"
          element={<SearchCondition />}
        />
      </Routes>
    </BrowserRouter>
  );
}