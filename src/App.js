import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import UpdateProduct from "./components/UpdateProduct";
import AddProduct from "./components/AddProduct";
import Registraion from "./components/Registraion";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registraion/>} />
          <Route path="/addProduct" element={<AddProduct/>} />
          <Route path="/updatePorduct" element={<UpdateProduct/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
