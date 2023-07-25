import "./App.css";
import Home from "./pages/Home";
import RestaurantPage from "./pages/RestaurantPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:restId" element={<RestaurantPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
