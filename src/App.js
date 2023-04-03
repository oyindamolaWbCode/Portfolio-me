import React from "react";
import { HashLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./index.css";
//import { NavLink } from "react-router-dom";
import About from "./components/About";
import Language from "./components/Language";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>Oyindamola</title>‍
          <meta name="description" content="Oyindamola's Portfolio" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@user" />
          <meta name="twitter:creator" content="@user" />
          <meta name="twitter:title" content="Oyindamola" />
          <meta name="twitter:description" content="My portfolio" />
          <meta name="twitter:image" content="url_to_image" />
          <meta property="og:title" content="Oyindamola" />
          <meta property="og:description" content="My portfolio" />
          <meta property="og:image" content="url_to_image" />
          <meta property="og:site_name" content="Oyindamola" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
        </Helmet>
      </HelmetProvider>
      <div className="loading">
        {loading ? (
          <HashLoader
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
            }}
            color={"#6e57e0"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            <div className="nav-content">
             
              < Navbar />
            </div> 
            <div className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Language" element={<Language />} />
                  <Route path="/Blogs"element={<Blogs />} />
                  <Route path="/Footer" element={<Footer />} />
                  <Route path="/Projects" element={<Projects />} />
                </Routes>
               </div>
               </>
        )}
      </div>
    </div>
  );
}

export default App;
