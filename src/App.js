import React from "react";
import { useQueryParam, StringParam } from "use-query-params";

import "./App.css";
import { Route } from "react-router-dom";
import SearchGiphs from "./pages/SearchGiphs/SearchGiphs";

function App() {
  const [Query, setQuery] = useQueryParam("q", StringParam);

  const updateUrlQueryState = (data) => {
    setQuery(data);
  };

  return (
    <div className="App">
      <Route path={`/`}>
        <SearchGiphs query={Query} updateUrlQueryState={updateUrlQueryState} />
      </Route>
    </div>
  );
}

export default App;
