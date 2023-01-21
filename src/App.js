import React from "react";
import Addblog from "./components/Addblog";
import BlogDisplay from "./components/BlogDisplay";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Addblog />

      <BlogDisplay />
    </div>
  );
}

export default App;