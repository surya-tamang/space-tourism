import React from "react";
import Header from "./components/Header";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import './index.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/space-tourism/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
