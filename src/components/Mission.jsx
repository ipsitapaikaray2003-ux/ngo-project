import "./Mission.css";

function Mission() {
  return (
    <section
  className="mission"
  id="mission"
  data-aos="fade-up"
>

      <div
  className="mission-title"
  data-aos="fade-down"
>
        <span>OUR PURPOSE</span>
        <h2>Mission & Vision</h2>
        <p>
          We strive to create sustainable change through education,
          healthcare, women empowerment and community development.
        </p>
      </div>

      <div className="mission-container">

        <div
  className="mission-card"
  data-aos="fade-right"
  data-aos-delay="100"
>
          <div className="icon">🎯</div>
          <h3>Our Mission</h3>
          <p>
            To uplift underprivileged communities by providing quality
            education, healthcare support, skill development and equal
            opportunities for every individual.
          </p>
        </div>

        <div
  className="mission-card"
  data-aos="zoom-in"
  data-aos-delay="300"
>
          <div className="icon">👁️</div>
          <h3>Our Vision</h3>
          <p>
            To build an inclusive society where every person can live
            with dignity, confidence and access to better opportunities.
          </p>
        </div>

        <div
  className="mission-card"
  data-aos="fade-left"
  data-aos-delay="500"
>
          <div className="icon">❤️</div>
          <h3>Our Values</h3>
          <p>
            Compassion, transparency, equality, integrity and commitment
            towards creating a positive social impact.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Mission;