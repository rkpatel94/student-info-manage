import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./SignIn";
import SignUpPage from "./SignUp";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddStudent from "./AddStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sign-in" element={<SignInPage/>} />
        <Route path="/sign-up" element={<SignUpPage/>} />
        <Route path="/student-registration" element={<AddStudent/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;