import React, { useState, useEffect } from "react";
import { useQueryParam, StringParam } from "use-query-params";
import { useHistory } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import SearchGiphs from "./pages/SearchGiphs/SearchGiphs";

function App() {
  const [Query, setQuery] = useQueryParam("q", StringParam);
  const history = useHistory();

  const updateState = (data) => {
    setQuery(data);
  };

  return (
    <div className="App">
      <Route path={`/`}>
        <SearchGiphs query={Query} updateState={updateState} />
      </Route>
    </div>
  );
}

export default App;
