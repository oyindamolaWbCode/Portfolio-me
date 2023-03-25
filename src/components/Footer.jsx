const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-volunteers">
        <div className="container">
          <div className="row">
            <div className="contact-section ">
              <div className="contact">
                <h4>Contact Me</h4>
                <p> Should you have a collaboration or opportunities for me, please contact me.</p>
                <form>
                    <label htmlFor="name">
                        Name:
                    </label>
                    <input type="name" />
                    <label htmlFor="email">
                        E-mail:
                    </label>
                    <input type="email" />
                    {/* <textarea>
                        Leave a message...
                    </textarea> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
