import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Giphs from "./pages/Giphs";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Giphs} />
      </Switch>
    </div>
  );
}

export default App;
