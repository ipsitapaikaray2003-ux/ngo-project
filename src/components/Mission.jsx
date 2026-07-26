import "./Mission.css";

function Mission() {
  return (
    <section className="mission" id="mission">

      <div className="mission-heading" data-aos="fade-up">
        <span>OUR PURPOSE</span>
        <h2>Mission & Vision</h2>
        <p>
          Creating sustainable impact through education, healthcare,
          empowerment, environmental responsibility, and community development.
        </p>
      </div>

      {/* Vision + Mission */}

      <div className="mission-container">

        <div className="mission-card" data-aos="fade-right">
          <div className="icon">👁️</div>

          <h3>Our Vision</h3>

          <p>
            To build an inclusive, empowered, and sustainable society where
            every individual has equal opportunities to learn, grow, and lead
            a life of dignity.
          </p>

          <p>
            We envision communities that are educated, healthy,
            self-reliant, environmentally responsible, and united in creating
            lasting social change through compassion, innovation, and
            collective action.
          </p>
        </div>

        <div className="mission-card" data-aos="fade-left">

          <div className="icon">🎯</div>

          <h3>Our Mission</h3>

          <p>
            At Roshankal Welfare Foundation, our mission is to improve the
            quality of life of underserved communities through impactful,
            sustainable, and community-centered initiatives.
          </p>

          <p>
            We work across education, healthcare, women empowerment,
            environmental protection, disaster relief, social inclusion,
            and community development while ensuring transparency,
            integrity, and long-term social impact.
          </p>

        </div>

      </div>

      {/* Core Commitments */}

      <div className="commitments">

        <h3>Our Core Commitments</h3>

        <div className="commitment-grid">

          <div className="commitment-card">📚 <span>Quality Education</span></div>

          <div className="commitment-card">👩‍🎓 <span>Women & Youth Empowerment</span></div>

          <div className="commitment-card">🏥 <span>Healthcare & Well-being</span></div>

          <div className="commitment-card">🌱 <span>Environment Protection</span></div>

          <div className="commitment-card">🚑 <span>Disaster Relief</span></div>

          <div className="commitment-card">🤝 <span>Social Inclusion</span></div>

          <div className="commitment-card">🏘 <span>Community Development</span></div>

          <div className="commitment-card">🛡 <span>Transparency & Accountability</span></div>

        </div>

      </div>

    </section>
  );
}

export default Mission;