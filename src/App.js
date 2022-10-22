import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Onu from "./Pages/Onu";
import Home from "./Pages/Home";
import styled from "styled-components";

const Nav = styled.nav``;

const Li = styled.li``;

export default function App() {
  return (
    <Router>
      <Nav>
        <Link to="/Onu">
          <Li>Onu</Li>
        </Link>
        <Link to="/">
          <Li>Home</Li>
        </Link>
      </Nav>
      <Routes>
        <Route path="/Onu" element={<Onu />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
