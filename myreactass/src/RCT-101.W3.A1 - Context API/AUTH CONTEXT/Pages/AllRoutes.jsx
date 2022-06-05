import { Route, Routes } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Login from "./Login";

function AllRoutes() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default AllRoutes;
