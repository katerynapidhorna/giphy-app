import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import SearchGiphs from "./pages/SearchGiphs/SearchGiphs";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={SearchGiphs} />
      </Switch>
    </div>
  );
}

export default App;
