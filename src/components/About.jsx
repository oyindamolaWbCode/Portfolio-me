import Image from '../Assets/img/profile.jpg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {HiInboxIn }from 'react-icons/hi';


const About = () =>{
    const [text] = useTypewriter({
        words : ['Frontend Developer'],
        loop: {},
    })
    return(
        <div className="about ">
            <div className="row p-3">
                 <div className="IntroImg col-lg-4 col-md">
                    <img src={Image} alt="oyindamola" style={{width: "380px", height: "450px", borderRadius: "100%", border: "3px solid #282828"}}/>
                </div>
                <div className="IntroMe col-lg col-md pt-5 ">
                    <h3 style={{fontFamily: "poppins", fontSize: "35px", fontWeight: "bolder"}}>Oyindamola Kushimo</h3>
                   <h3>
                    <span style={{fontWeight: "bold", color: "#6E57E0"}}>
                        {text}
                    </span>
                    <span style={{color: 'red'}}>
                        <Cursor cursorStyle= ' _{ ' />
                    </span>
                   </h3>
                    <p className='fs-4'>Hello! It's nice having you here, I am a passionate programmer in my daily life. A quick learner with a self-learning attitude. I love to learn and explore new technologies and Passionate about Problem Solving.</p>
                    <div className='ResumeNcontact d-flex '>
                        <div className='resume m-r-10'>
                            <button style={{backgroundColor: "transparent", color: "#6E57E0"}} className="OutL" >Download CV <HiInboxIn className='icon fs-5'/></button>
                        </div>
                        <div className='contact'>
                            <button  style={{backgroundColor: "#6E57E0", color: "white", borderRadius: "10px"}}>Contact Me</button>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;