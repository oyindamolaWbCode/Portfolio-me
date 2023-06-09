
import css from "../Assets/img/css3-logo-png-transparent.png";
import javascript from "../Assets/img/javascript.svg";
import reactjs from "../Assets/img/reactjs.svg";
import vuejs from "../Assets/img/vuejs.png";
import bootstrap from "../Assets/img/bootstrap-4.svg";
import Html from "../Assets/img/html5-icon-13.jpg";
// import { Animator, Fade, ScrollContainer, ScrollPage,batch } from "react-scroll-motion";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Language =  () =>{
    useEffect(() =>{
        AOS.init({duration: 2000})
    }, [])

return(
    <div className='animation' data-aos="zoom-in">
    <div className="lanSkill">
    <div className="languages-skills">
        <h3 className="pro" style={{margin: "auto", textAlign: "center", marginTop: "20px", marginBottom: "20px"}}>Skills</h3>
        </div>
        <div className="skillsContainer">
            <div className="row mb-4">
                <div className="col-md-4 col-sm-2 ">
                    <img src={Html} alt="" style={{backgroundColor: "transparent", width: "96px", height: "96px"}}/>
                    <h4 className="nameLan">HTML</h4>
                </div>
                <div className="col-md-4 col-sm-2">
                    <img src={css} alt="" style={{backgroundColor: "transparent", width: "96px", height: "96px"}}/>
                    <h4 className="nameLan">CSS</h4>
                </div>
                <div className="col-md-4 col-sm-2">
                    <img src={javascript} alt="" style={{backgroundColor: "transparent", width: "96px", height: "96px"}}/>
                    <h4 className="nameLan">JavaScript</h4>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-4 col-sm-2 ">
                    <img src={reactjs} alt="" style={{backgroundColor: "transparent"}}/>
                    <h4 className="nameLan">React.js</h4>
                </div>
                <div className="col-md-4 col-sm-2" >
                    <img src={vuejs} alt="" style={{backgroundColor: "transparent", width: "96px", height: "96px"}}/>
                    <h4 className="nameLan">Vue.js</h4>
                </div>
                <div className="col-md-4 col-sm-2 ">
                    <img src={bootstrap} alt="" style={{backgroundColor: "transparent", width: "96px", height: "96px"}}/>
                    <h4 className="nameLan">Bootstrap</h4>
                </div>
            </div>
        </div>
        </div>
     </div>
)

}

export default Language;