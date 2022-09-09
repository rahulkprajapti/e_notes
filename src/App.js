import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <>
    <NoteState>
      
      <Router>
        <Navbar></Navbar>
        <Routes>
        <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/about" element={<About/>}> 
          </Route>
          <Route exact path="/login" element={<Login/>}> 
          </Route>
          <Route exact path="/signup" element={<Signup/>}> 
          </Route>
        </Routes>
      </Router> 
      </NoteState>
    </>
  );
}

export default App;
