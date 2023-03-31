import repo from '../Assets/img/repo.png'
import todo from "../Assets/img/todo.png";
import phonie from "../Assets/img/phonie.png";
import About from "./About";
import Language from "./Language";
import Footer from "./Footer";
import Blogs from "./Blogs";
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const Home = () => {
  return (
    <div className="Homepage">
      <About />
      <Language />
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
              This project lists individual repositories in the github, it
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
                The app adds, deletes, modify todos to give a stress- free life
                making daily life organized
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
                This project output the service provider logo whenever a nigeria
                is inputted into the input type box
              </p>
              <a href="https://phonie-dun.vercel.app/" target="_blank" rel="noopener noreferrer"><button> View Demo</button></a>
            </div>
          </div>
        </div>
        <div className="project-viewAll">
            <a href="/Projects" className="underline-animation" style={{
                textDecoration: "none",
                color: "#6e57e0"
            }}><button className='jss160'>View All < BsFillArrowRightCircleFill size={28}/></button>
                
              </a>
        </div>
      </div>
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
