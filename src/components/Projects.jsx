import crowdfunding from "../Assets/img/crowdfunding.png";
import interactive from "../Assets/img/interative.png";
import jokes from "../Assets/img/jokes.png";
import mechanic from "../Assets/img/mechanic.png";
import navigation from "../Assets/img/navigation.png";
import phonie from "../Assets/img/phonie.png";
import quiz from "../Assets/img/quiz.png";
import redactr from "../Assets/img/redactr.png";
// import { NavLink } from "react-bootstrap";
import repo from "../Assets/img/repo.png";
import todo from "../Assets/img/todo.png";
// import {motion} from 'framer-motion';
// import {useRef, useEffect, useState} from "react"

const Projects = () => {
  return (
    <div className="container">
      <div className="project-header">
        <h3
          className="pro"
          style={{
            margin: "auto",
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Projects
        </h3>
      </div>

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
                  This is project list individual repositories in the github, it
                  also gives details about the repos.
                </p>
               <a href="https://githubapi-with-vue.vercel.app/" target="_blank" rel="noopener noreferrer"><button> View Demo</button></a>
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
                  The app adds, deletes, modify todos to give a stress- free
                  life making daily life organized
                </p>
                <a href="https://todo-list-iota-mocha.vercel.app/" target="_blank" rel="noopener noreferrer"><button> View Demo</button></a>
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
                  This project output the service provider logo whenever a
                  nigeria is inputted into the input type box
                </p>
                 <a href="https://phonie-dun.vercel.app/" target="_blank" rel="noopener noreferrer"><button> View Demo</button></a>
                </div>
                </div> 
 <div className="single-project col-md-4">
              <div className="single-content">
                <h3>Redactr Project</h3>
                <img
                  src={redactr}
                  alt=""
                  style={{ height: "180px", width: "100%" }}
                />
                <p className="p-3">
                  This project output the service provider logo whenever a
                  nigeria is inputted into the input type box
                </p>
                 <a href="https://redactr-app.vercel.app/" target="_blank" rel="noopener noreferrer"><button> View Demo</button></a>
                </div>
                </div> 
 <div className="single-project col-md-4">
              <div className="single-content">
                <h3>Quiz Project</h3>
                <img
                  src={quiz}
                  alt=""
                  style={{ height: "180px", width: "100%" }}
                />
                <p className="p-3">
                  The project is a testing platform outputing random questions, evaluates and give result after done with the assessment.
                </p>
                 <a href="https://quiz-one-chi.vercel.app/" target="_blank" rel="noopener noreferrer"><button> View Demo</button></a>
                </div>
                </div> 
 <div className="single-project col-md-4">
              <div className="single-content">
                <h3>Navigation</h3>
                <img
                  src={navigation}
                  alt=""
                  style={{ height: "180px", width: "100%" }}
                />
                <p className="p-3">
                  This is a page showing a sliding navigation.
                </p>
                 <a href="https://rotating-navigation-mocha.vercel.app/" target="_blank" rel="noopener noreferrer"><button> View Demo</button></a>
                </div>
                </div> 
<div className="single-project col-md-4">
              <div className="single-content">
                <h3>Mechanic Website</h3>
                <img
                  src={mechanic}
                  alt=""
                  style={{ height: "180px", width: "100%" }}
                />
                <p className="p-3">
                 A landing page for a mecahanic website.
                </p>
                 <a href="https://mechanic-landing-page.vercel.app/" target="_blank" rel="noopener noreferrer"><button> View Demo</button></a>
                </div>
                </div>
 <div className="single-project col-md-4">
              <div className="single-content">
                <h3>Rating site</h3>
                <img
                  src={interactive}
                  alt=""
                  style={{ height: "180px", width: "100%" }}
                />
                <p className="p-3">
                  This is a small page displaying an intrative rating, it can be used in e-commerce website or any webpage that requires rating feedback.
                </p>
                 <a href="https://interactive-rating-lake.vercel.app/" target="_blank" rel="noopener noreferrer"><button> View Demo</button></a>
                </div>
                </div> 
 <div className="single-project col-md-4">
              <div className="single-content">
                <h3>Crowdfunding website</h3>
                <img
                  src={crowdfunding}
                  alt=""
                  style={{ height: "180px", width: "100%" }}
                />
                <p className="p-3">
                  This is a landing page of a crowdfunding website
                </p>
                 <a href="https://crowdfunding-website.vercel.app/" target="_blank" rel="noopener noreferrer"><button> View Demo</button></a>
                </div>
                </div> 
 <div className="single-project col-md-4">
              <div className="single-content">
                <h3>Random Jokes</h3>
                <img
                  src={jokes}
                  alt=""
                  style={{ height: "180px", width: "100%" }}
                />
                <p className="p-3">
                  The site is a Api fetch data to output random jokes.
                </p>
                 <a href="https://dad-s-jokes-tau.vercel.app/" target="_blank" rel="noopener noreferrer"><button> View Demo</button></a>
                </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
