import "./Programs.css";

function Programs() {
  return (
    <section className="programs" id="programs">

      <div className="program-heading">
        <span>OUR PROGRAMS</span>
        <h2>Creating Positive Change</h2>
        <p>
          Our initiatives focus on uplifting communities through education,
          healthcare, skill development and social welfare.
        </p>
      </div>

      <div className="program-grid">

        <div className="program-card">
          <div className="program-icon">📚</div>
          <h3>Education</h3>
          <p>Providing quality education and learning opportunities for children.</p>
        </div>

        <div className="program-card">
          <div className="program-icon">🏥</div>
          <h3>Healthcare</h3>
          <p>Health awareness camps, medical support and wellness programs.</p>
        </div>

        <div className="program-card">
          <div className="program-icon">👩</div>
          <h3>Women Empowerment</h3>
          <p>Helping women become financially independent through training.</p>
        </div>

        <div className="program-card">
          <div className="program-icon">💻</div>
          <h3>Skill Development</h3>
          <p>Professional training and career guidance for youth.</p>
        </div>

        <div className="program-card">
          <div className="program-icon">🌱</div>
          <h3>Environment</h3>
          <p>Tree plantation and environmental awareness initiatives.</p>
        </div>

        <div className="program-card">
          <div className="program-icon">🤝</div>
          <h3>Community Welfare</h3>
          <p>Supporting underprivileged families with social welfare activities.</p>
        </div>

      </div>

    </section>
  );
}

export default Programs;