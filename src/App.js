import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Dasshboard from "./Components/Dasshboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/dashboard" element={<Dasshboard></Dasshboard>}></Route>
        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
