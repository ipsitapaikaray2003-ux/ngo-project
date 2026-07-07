import "./Contact.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-heading">
        <span>GET IN TOUCH</span>

        <h2>Let's Make A Difference Together</h2>

        <p>
          We'd love to hear from you. Reach out to us for volunteering,
          partnerships, donations or any queries.
        </p>
      </div>

      {/* Contact Cards */}

      <div className="contact-cards">

        {/* Phone */}

        <div className="contact-card">

          <div className="contact-icon">
            <FaPhoneAlt />
          </div>

          <h3>Call Us</h3>

          <a
            href="tel:+919797223772"
            className="contact-link"
          >
            +91 9797223772
          </a>

        </div>

        {/* Email */}

        <div className="contact-card">

          <div className="contact-icon">
            <FaEnvelope />
          </div>

          <h3>Email Us</h3>

          <a
            href="mailto:roshankalwelfarefoundation@gmail.com"
            className="contact-link"
          >
            roshankalwelfarefoundation@gmail.com
          </a>

        </div>

        {/* Location */}

        <div className="contact-card">

          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>

          <h3>Visit Us</h3>

          <a
            href="https://www.google.com/maps/place/34%C2%B023'39.8%22N+73%C2%B051'22.3%22E/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Karnah, Kupwara, Jammu & Kashmir
          </a>

        </div>

      </div>

      {/* Map + Form */}

      <div className="contact-content">

        {/* Google Map */}

        <div className="contact-left">

          <iframe
            title="RoshanKal Welfare Foundation Location"
            src="https://maps.google.com/maps?q=34.394389,73.856194&z=15&output=embed"
            loading="lazy"
          ></iframe>

        </div>

        {/* Contact Form */}

        <div className="contact-right">

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;