import React, { useEffect } from "react";
import Header from "./Components/Header";
import Initial from "./Components/Initial/Index";
import Footer from "./Components/Footer";
import SocialNetwork from "./Components/SocialNetworks";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <SocialNetwork />
      <Routes>
        <Route path="/" element={<Initial />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
