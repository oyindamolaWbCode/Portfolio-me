import {MdOutlineAlternateEmail} from 'react-icons/md';
import {FiPhone} from 'react-icons/fi';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineMedium} from 'react-icons/ai';
import {FaLinkedin} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {FiInstagram} from 'react-icons/fi';
import contact from "../Assets/img/contact-removebg-preview.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-volunteers">
        <div className="container">
          <div className="row">
            <div className="contact-section col-md-4">
              <div className="contact-footer">
                {/* <h4 className='contact-header'>Contact Me</h4> */}
                <p className='con-para'> Should you have a collaboration or opportunities for me, do reach out to me.</p>
                <form action="mailto:kushimo.oyindamola@gmail.com" method="post" encType="text/plain">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" />
                    <label htmlFor="email">
                        E-mail
                    </label>
                    <input type="email" />
                    <textarea rows={4} cols={48} />
                    <input type="submit" value="Send" />
                </form>
              </div>
            </div>
          < div className="social-section col-md-4">
              <div className="detailed-contact">
                <div className='single-detailed d-flex'>
                  <span className='SinD'><MdOutlineAlternateEmail size={28}/></span>
                  <p className='SinP'>kushimo.oyindamola@gmail.com</p>
                </div>
                <div className='single-detailed d-flex'>
                  <span className='SinD'><FiPhone size={28}/></span>
                  <p className='SinP'>(+234) 812 310 3393</p>
                </div>
                <div className='single-detailed d-flex'>
                  <span className='SinD'><HiOutlineLocationMarker size={28}/></span>
                  <p className='SinP'>Lagos, Nigeria</p>
                </div>
              </div>
              <div className='social media'>
                <ul className='d-flex justify-content-between'>
                  <li>
                    <a href="https://github.com/oyindamolaWbCode" target="_blank" rel="noopener noreferrer"><span className='Sind'><AiFillGithub  className='SnM'/></span></a>
                  </li>
                  <li>
                    <a href="https://medium.com/@kushimo.oyindamola" target="_blank" rel="noopener noreferrer"><span className='Sind'><AiOutlineMedium  className='SnM'/></span></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/oyindamola-kushimo-ss3b/" target="_blank" rel="noopener noreferrer"><span className='Sind'><FaLinkedin  className='SnM'/></span></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/O___yindamola" target="_blank" rel="noopener noreferrer"><span className='Sind'> <BsTwitter  className='SnM'/></span></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/_oyindamolak/" target="_blank" rel="noopener noreferrer"><span className='Sind'><FiInstagram  className='SnM'/></span></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='img-section col-md-4'>
              <img src={contact} alt=""  style={{width: "100%"}}/>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Footer;
