import "./About.css";
import { Link } from "react-router-dom";

import aboutTop from "../assets/about-top.png";
import aboutMain from "../assets/about-main.png";
import aboutBottom from "../assets/about-bottom.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Left Images */}

        <div className="about-image" data-aos="fade-right">

          <img
            src={aboutTop}
            alt="Education Initiative"
            className="about-small"
          />

          <img
            src={aboutMain}
            alt="Roshankal Welfare Foundation"
            className="about-main"
          />

          <img
            src={aboutBottom}
            alt="Community Support"
            className="about-small"
          />

        </div>

        {/* Right Content */}

        <div
          className="about-content"
          data-aos="fade-left"
        >

          <span>ABOUT US</span>

          <h2>Empowering Communities, Creating Lasting Change</h2>

          <p>
            <strong>Roshankal Welfare Foundation</strong> is a registered
            <strong> Section 8 non-profit organization</strong> committed to
            creating meaningful and lasting social impact through compassion,
            innovation, and community-driven development.
          </p>

          <p>
            Established on <strong>29 September 2025</strong>, the Foundation
            works to empower individuals and strengthen communities by
            promoting education, healthcare, women empowerment, youth
            development, environmental sustainability, and humanitarian
            assistance.
          </p>

          <p>
            Headquartered in the picturesque border region of
            <strong> Tangdhar, Karnah, District Kupwara, Jammu & Kashmir</strong>,
            we believe every individual—regardless of geography, gender, or
            economic background—deserves equal access to opportunities that
            foster dignity, self-reliance, and a better quality of life.
          </p>

          <p>
            Our initiatives address real community needs through sustainable
            solutions, strategic partnerships, and active public participation.
            We envision a society where education inspires change, healthcare
            reaches every doorstep, women and youth become leaders of progress,
            and communities thrive through collective action.
          </p>

          <p>
            Guided by the principles of
            <strong> Integrity, Transparency, Accountability,</strong> and
            <strong> Service</strong>, every initiative is implemented with
            professionalism and responsibility. The Foundation is recognized
            under the provisions of the Companies Act, 2013, and has obtained
            <strong> Section 12AB Registration</strong> and
            <strong> Section 80G Approval</strong> under the Income Tax Act,
            enabling us to serve society with credibility and encourage
            charitable giving.
          </p>

          <p>
            By collaborating with government institutions, educational
            organizations, corporate partners, volunteers, and civil society,
            we strive to build a future where hope transforms into opportunity
            and opportunity transforms into lasting progress.
          </p>

          <blockquote className="about-quote">
            "Together, we are committed to building stronger communities,
            empowering lives, and creating a brighter future for generations to
            come."
          </blockquote>

          <Link to="/leadership">
            <button className="about-btn">
              Learn More →
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default About;