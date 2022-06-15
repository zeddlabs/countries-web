import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App font-body text-light-mode-text dark:text-light-mode-bg">
      <Header />
      <main className="px-4 lg:px-16">
        <BrowserRouter>
          <Routes>
            <Route path={import.meta.env.BASE_URL} element={<Home />}></Route>
            <Route
              path={`${import.meta.env.BASE_URL}:name`}
              element={<Detail />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
