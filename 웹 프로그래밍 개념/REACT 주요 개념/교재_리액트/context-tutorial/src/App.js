import React from "react";
import "./App.css";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./context/color";

function App() {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
