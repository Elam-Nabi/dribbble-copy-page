import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

import { AnimatePresence } from "framer-motion";
import { GlobalContext } from "./useContext";
import Navbar from "./components/Navbar";

const App = () => {
  const [silver, setSilver] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <GlobalContext.Provider value={{ silver, setSilver, count, setCount }}>
      <Router>
        <AnimatePresence>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/products" exact component={Products} />
        </AnimatePresence>
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
