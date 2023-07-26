import "./App.css";
import Home from "./pages/Home";
import RestaurantPage from "./pages/RestaurantPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({});

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route
            path="/:restId"
            element={<RestaurantPage user={user} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
