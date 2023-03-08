import Header from "./Component/Header";
import Home from "./Component/Home/home";
import Login from "./Component/login/Login";
import Footer from "./Component/Footer";



import { useState, useEffect } from 'react';
import { BrowserRouter, Router } from "react-router-dom";
import { Route , Routes , useLocation} from 'react-router-dom';
import { NavLink } from "react-router-dom";


function App() {
  const location = useLocation();
  const pathValue=location.pathname;



  
  useEffect(() => {

  },[pathValue]);
  return (
    <div className="App" style={{ backgroundColor: "rgb(37,36,36)" }}>
  {pathValue === "/login" ?"": <Header />}
 
   <Routes>
       <Route exect path="/" element={<Home />} />
       <Route exect path="/login" element={<Login />} />
   </Routes>

  {pathValue === "/login" ?"": <Footer />}
    </div>
  );
}

export default App;
