import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GrayPage from "./pages/GrayPage";
import PinkPage from "./pages/PinkPage";
import Products from "./pages/Products";

import { AnimatePresence } from "framer-motion";
import { GlobalContext } from "./context/useContext";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const [silver, setSilver] = useState(false);
  const [pink, setPink] = useState(false);
  const [gray, setGray] = useState(false);
  const [video, setVideo] = useState(false);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        silver,
        setSilver,
        count,
        setCount,
        video,
        setVideo,
        pink,
        setPink,
        gray,
        setGray,
        cart,
        setCart,
      }}
    >
      <Router>
        <AnimatePresence>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/pink" component={PinkPage} />
          <Route path="/gray" component={GrayPage} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/products" exact component={Products} />
        </AnimatePresence>
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
