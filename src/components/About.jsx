import Image from '../Assets/img/profile.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {HiInboxIn }from 'react-icons/hi';
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const About = () =>{
    const [text] = useTypewriter({
        words : ['Frontend Developer'],
        loop: {},
    })

    useEffect(() =>{
        AOS.init({duration: 2000})
    }, [])
    return(
        <div className="about">
              <div className="row p-3 mb-5">
            {/* <div className='animation' data-aos="flip-left"> */}
                 <div className="IntroImg col-lg-4 col-md">
                    <img src={Image} alt="oyindamola" style={{width: "380px", height: "420px", borderRadius: "100%", border: "3px solid #282828"}}/>
                 </div>
                {/* </div>  */}
                <div className="IntroMe col-lg col-md pt-5 ">
                    <h3 style={{fontFamily: "poppins", fontSize: "35px", fontWeight: "bolder"}}>Oyindamola Kushimo</h3>
                   <h3>
                    <span style={{fontWeight: "bold", color: "#b48484"}}>
                        {text}
                    </span>
                    <span style={{color: 'red'}}>
                        <Cursor cursorStyle= ' _{ ' />
                    </span>
                   </h3>
                    <p className='fs-4'>Hello! It's nice having you here, I am a passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and Passionate about Problem Solving.</p>
                    <div className='ResumeNcontact d-flex '>
                        <div className='resume m-r-10'>
                            <a href="https://drive.google.com/file/d/1UjlJbYJa0jUOdT7xXw3Y_FMGx6AhYqDl/view?usp=share_link" target="_blank" rel="noopener noreferrer"><button style={{backgroundColor: "transparent", color: "#b38383"}} className="OutL" >Download CV <HiInboxIn className='icon fs-5'/></button></a>
                        </div>
                        <div className='contact'>
                            <a href="/footer"><button  style={{backgroundColor: "#b38383", color: "#282828", borderRadius: "10px", padding: "13px 40px" }}>Contact Me</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sign'></div>
            <div className='line'></div>
        </div>
    )
}

export default About;