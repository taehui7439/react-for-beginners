import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Detail from "./component/Detail";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;