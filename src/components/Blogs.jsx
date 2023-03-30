import props from "../Assets/img/props.jpg";
import calculator from "../Assets/img/calculator.png";
import Bug from "../Assets/img/bug.png"

const Blogs = () =>{
    return(
        <div className="blogs-container">
            <div className="blog-header">
            <h3
          className="pro"
          style={{
            margin: "auto",
            textAlign: "center",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Blogs
        </h3>
            </div>
            <div className="project-container">
        <div className="row mb-2">
        <div className="single-project col-md-4">
              <div className="single-content">
                <h3> Props </h3>
                <img
                  src={props}
                  alt=""
                  style={{ height: "180px", width: "100%" }}
                />
                <button className="smallBu">React</button>
                <button className="smallBu">JSX</button>
               <a href="https://medium.com/@kushimo.oyindamola/lets-have-some-reaction-on-props-fc30a2c258b8" target="_blank" rel="noopener noreferrer" className="read"> Read</a>
              </div>
            </div> 
            <div className="single-project col-md-4">
              <div className="single-content">
                <h3> React Calculator </h3>
                <img
                  src={calculator}
                  alt=""
                  style={{ height: "180px", width: "100%" }}
                />
                <button className="smallBu">onClick</button>
                <button className="smallBu">Calculator</button>
               <a href="https://medium.com/@kushimo.oyindamola/building-calculator-with-react-2d7a492ce3ee" target="_blank" rel="noopener noreferrer" className="read">Read</a>
              </div>
            </div> 
            <div className="single-project col-md-4">
              <div className="single-content">
                <h3> Vercel SyntaxError </h3>
                <img
                  src={Bug}
                  alt=""
                  style={{ height: "180px", width: "100%" }}
                />
                <button className="smallBu">JSX</button>
                <button className="smallBu">Components</button>
               <a href="https://medium.com/@kushimo.oyindamola/solving-vercel-deployment-syntax-error-2bec0110967" target="_blank" rel="noopener noreferrer" className="read">Read</a>
              </div>
            </div> 
            </div>
            </div>

        </div>
    );
}

export default Blogs;
