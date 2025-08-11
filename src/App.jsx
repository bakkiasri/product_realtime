import React from "react";
import Home from "./Components/home";
import Product from "./Components/product";
import Contact from "./Components/contact";
import About from "./Components/about";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./Components/product_details";
import Login from "./Components/login";
import PrivateRoute from "./privateroute"; // import the private route
import NotFound from "./layout/Nopagefound";
function App() {
  return (
    <>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login />} />

        {/* Private routes */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <PrivateRoute>
              <ProductDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            
              <NotFound />
           
          }
        />

      </Routes>
    </>
  );
}

export default App;
