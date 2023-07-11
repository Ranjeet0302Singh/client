
import "./App.css";
import AddUsers from "./components/AddUsers";
import AllUsers from "./components/AllUsers";
import CodeWithRanjeet from "./components/CodeWithRanjeet";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CodeWithRanjeet />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
