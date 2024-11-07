import React from "react";

const ContactInfo = () => {
  return (
    <div className="row pb-70">
      <div className="col-lg-4">
        <div className="contact-address">
          <div className="contact-icon">
            <i className="ri-map-pin-fill"></i>
          </div>

          <div className="contact-info">
            <h5>Office Address</h5>
            <p>
              Plaza tobacco, local #26, <br />
              Punta Cana, <br /> DR
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="contact-address">
          <div className="contact-icon">
            <i className="ri-phone-fill"></i>
          </div>

          <div className="contact-info">
            <h5>Contact</h5>
            <p>
              Phone: <a href="tel:+18098054087">+1 (809) 805-4087</a>
            </p>

            <p>
              Email:{" "}
              <a href="mailto:info@puntacana4life.com">info@puntacana4life.com</a>
            </p>

            <p>
              Website:{" "}
              <a href="https://PuntaCana4life.com" target="_blank" rel="noopener noreferrer">
                PuntaCana4life.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="contact-address">
          <div className="contact-icon">
            <i className="ri-share-fill"></i>
          </div>

          <div className="contact-info">
            <h5>Follow Us On</h5>
            <p>Follow us on social networks to stay close.</p>

            <ul className="social-profile v1">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-facebook-fill"></i>{" "}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/puntacana4life/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <i className="ri-instagram-line"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;