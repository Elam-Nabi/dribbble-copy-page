import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <AnimatePresence>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/products" exact component={Products} />
      </AnimatePresence>
    </Router>
  );
};

export default App;
