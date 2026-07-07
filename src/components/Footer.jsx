import "./Footer.css";
import {
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}

        <div className="footer-box">

          <h2>RoshanKal Welfare Foundation</h2>

          <p>
            RoshanKal Welfare Foundation is committed to empowering
            communities through education, healthcare, women empowerment,
            skill development, environmental awareness and social welfare
            initiatives.
          </p>

          <div className="social-icons">

            {/* Facebook */}

            <a
              href="https://www.facebook.com/share/198adWBcVW/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            {/* WhatsApp */}

            <a
              href="https://wa.me/919797223772"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            {/* Email */}

            <a href="mailto:roshankalwelfarefoundation@gmail.com">
              <FaEnvelope />
            </a>

            {/* Location */}

            <a
              href="https://www.google.com/maps/place/34%C2%B023'39.8%22N+73%C2%B051'22.3%22E/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#mission">Mission</a>
          <a href="#programs">Programs</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>

        </div>

        {/* Programs */}

        <div className="footer-box">

          <h3>Our Programs</h3>

          <a href="#">Education Support</a>
          <a href="#">Healthcare</a>
          <a href="#">Women Empowerment</a>
          <a href="#">Skill Development</a>
          <a href="#">Community Welfare</a>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact Us</h3>

          <p>
            <FaPhoneAlt />{" "}
            <a
              href="tel:+919797223772"
              className="footer-link"
            >
              +91 9797223772
            </a>
          </p>

          <p>
            <FaEnvelope />{" "}
            <a
              href="mailto:roshankalwelfarefoundation@gmail.com"
              className="footer-link"
            >
              roshankalwelfarefoundation@gmail.com
            </a>
          </p>

          <p>
            <FaMapMarkerAlt />{" "}
            <a
              href="https://www.google.com/maps/place/34%C2%B023'39.8%22N+73%C2%B051'22.3%22E/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Karnah, Kupwara, Jammu & Kashmir
            </a>
          </p>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 RoshanKal Welfare Foundation. All Rights Reserved.
        </p>

        <p className="developer">
          Developed by{" "}
          <a
            href="https://www.qubnixtechnology.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Qubnix Technology
          </a>
        </p>

      </div>

    </footer>
  );
}

export default Footer;