import React from "react";
import { HashLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./index.css";
import hamburger from "./Assets/img/icon-hamburger.svg";
import closeburger from "./Assets/img/icon-close-menu.svg";
import { NavLink } from "react-router-dom";
import About from "./components/About";
import Language from "./components/Language";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Education from "./components/Education";
//import Loader from "./components/Loader/Loader"
function App() {
  const [loading, setLoading] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
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
              <NavLink
                className="navbar d-flex justify-content-end"
                style={{ marginRight: "10px", textDecoration: "none" }}
              >
                <span id="menu-icon">
                  <img
                    src={hamburger}
                    alt="hamburger menu icon"
                    onClick={() => setNavbarOpen((prev) => !prev)}
                  />
                </span>
                {/* {
                navbarOpen ? '<img src={closeburger}/>' : '<img src={hamburger}/>'
              } */}
                <img
                  src={closeburger}
                  className="closebtn"
                  alt="close menu"
                  id="close-icon"
                />
                <ul id="menu" className={`menu${navbarOpen ? "show" : ""}`}>
                  <li>
                    <a href ="/" style={{ textDecoration: "none", color: "white" }}>About</a>
                  </li>
                  <li>
                    <a href ="/Projects" style={{ textDecoration: "none", color: "white" }}>Projects</a>
                  </li>
                  <li>
                  <a href ="/" style={{ textDecoration: "none", color: "white" }}>Resume</a>
                  </li>
                  <li>
                    <a href ="/Footer" style={{ textDecoration: "none", color: "white" }}>Contact</a>
                      
                  </li>
                </ul>
              </NavLink>
            </div>
            <div className="main-content">
              <div className="container">
                <About />
                <Language />
                <Projects />
                <Footer />
                <Blogs />
                <Education />
                
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
