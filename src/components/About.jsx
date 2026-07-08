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
            Roshankal Welfare Foundation is a social welfare NGO dedicated to helping people in Kashmir and other parts of India. The organization is officially registered with NITI Aayog and works with the vision of supporting needy and deserving individuals through humanitarian and development initiatives.

Our main aim is to improve the lives of people by providing support in the fields of education, healthcare, social welfare, and community development. We believe that every person deserves equal opportunities, quality education, proper medical care, and a better future.

The foundation actively works to assist students, poor families, patients, and people facing difficulties in society. Through awareness programs, charitable activities, educational support, and health-related initiatives, we strive to bring positive change to communities.

At Roshankal Welfare Foundation, our mission is to serve humanity with honesty, compassion, and dedication, creating hope and opportunities for a brighter tomorrow.


          </p>

          <p>
            Since 2025 september, we have been committed to creating positive
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