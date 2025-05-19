import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center my-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teste" element={<h1>teste</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
