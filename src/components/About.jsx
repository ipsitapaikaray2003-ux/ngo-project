import "./About.css";
import aboutImg from "../assets/about.avif";
import { useNavigate } from "react-router-dom";

function About() {

  const navigate = useNavigate();

  return (
    <section className="about" id="about" data-aos="fade-up">

      <div className="about-container">

        {/* Left Image */}

        <div className="about-image" data-aos="fade-right">
          <img
            src={aboutImg}
            alt="About RoshanKal Welfare Foundation"
          />
        </div>

        {/* Right Content */}

        <div className="about-content" data-aos="fade-left">

          <span className="section-title">
            ABOUT US
          </span>

          <h2>
            Empowering Communities
            <br />
            Building a Better Tomorrow
          </h2>

          <p>
            RoshanKal Welfare Foundation is a registered non-profit
            organization dedicated to empowering individuals and
            communities through education, healthcare, youth
            development, women empowerment, environmental awareness
            and social welfare initiatives.
          </p>

          <p>
            Since 2016, we have been committed to creating positive
            social impact by working with local communities,
            educational institutions and government organizations
            to improve lives and build a sustainable future.
          </p>

          {/* Features */}

          <div className="features">

            <div
              className="feature-card"
              data-aos="zoom-in"
            >
              <h3>🎓 Education</h3>

              <p>
                Quality education and skill development
                for youth and children.
              </p>

            </div>

            <div
              className="feature-card"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <h3>👩 Women Empowerment</h3>

              <p>
                Supporting women through vocational
                training and self-employment.
              </p>

            </div>

            <div
              className="feature-card"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <h3>🌱 Environment</h3>

              <p>
                Tree plantation, awareness campaigns
                and sustainable development.
              </p>

            </div>

          </div>

          {/* Learn More Button */}

          <div className="about-btn-box">

            <button
              className="about-btn"
              onClick={() => navigate("/leadership")}
            >
              Learn More →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;