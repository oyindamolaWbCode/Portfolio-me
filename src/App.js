import React from "react";
import { HashLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./index.css";
import hamburger from "./Assets/img/icon-hamburger.svg";
import closeburger from "./Assets/img/icon-close-menu.svg";
import { Link, NavLink } from "react-router-dom";
import About from "./components/About";
import Language from "./components/Language";
// import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Education from "./components/Education";
import repo from "./Assets/img/repo.png";
import todo from "./Assets/img/todo.png";
import phonie from "./Assets/img/phonie.png";
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
              </NavLink>
              <ul id="menu" className={`menu${navbarOpen ? "show" : ""}`}>
                <li>
                  <NavLink
                    href="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/Projects"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Resume
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/Footer"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="main-content">
              <div className="container">
                <About />
                <Language />
                <>
                  <div className="project-container">
                    <div className="row mb-2">
                      {/* slideShow */}

                      <div className="single-project col-md-4">
                        <div className="single-content">
                          <h3>Github Api </h3>
                          <img
                            src={repo}
                            alt=""
                            style={{ height: "180px", width: "100%" }}
                          />
                          <p className="p-3">
                            This is project list individual repositories in the
                            github, it also gives details about the repos.
                          </p>
                          <button>View Demo</button>
                        </div>
                      </div>
                      <div className="single-project col-md-4">
                        <div className="single-content">
                          <h3>Todo App</h3>
                          <img
                            src={todo}
                            alt=""
                            style={{ height: "180px", width: "100%" }}
                          />
                          <p className="p-3">
                            The app adds, deletes, modify todos to give a
                            stress- free life making daily life organized
                          </p>
                          <button>View Demo</button>
                        </div>
                      </div>
                      <div className="single-project col-md-4">
                        <div className="single-content">
                          <h3>Phonie Project</h3>
                          <img
                            src={phonie}
                            alt=""
                            style={{ height: "180px", width: "100%" }}
                          />
                          <p className="p-3">
                            This project output the service provider logo
                            whenever a nigeria is inputted into the input type
                            box
                          </p>
                          <button>View Demo</button>
                        </div>
                      </div>
                    </div>
                    <div className="arrow">
                      <ul>
                        <li>
                          <NavLink>
                            <Link href="/Projects" style={{textDecoration: "none", color: "white", fontFamily: "fantasy", display: "flex", justifyContent: "flex-end"}}>View More</Link>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </>
                <Blogs />
                <Education />
                <Footer />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
