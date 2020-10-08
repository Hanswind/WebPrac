import React from "react";
import { Route } from "react-router-dom";
import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";

function App() {
  return (
    <div>
      <Menu />
      <hr />
      <Route pate="/blue" component={BluePage} />
      <Route path="/red" component={RedPage} />
    </div>
  );
}

export default App;
