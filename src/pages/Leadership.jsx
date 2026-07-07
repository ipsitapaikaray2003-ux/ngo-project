import "./Leadership.css";
import { useNavigate } from "react-router-dom";

import director from "../assets/director.png";
import manager from "../assets/manager.jpeg";

function Leadership() {
    const navigate = useNavigate();
  return (
    <section className="leadership-page">

      <div className="page-title">

        <span>OUR LEADERSHIP</span>

        <h1>Meet Our Leadership Team</h1>

        <p>
          Dedicated leaders committed to education, community welfare,
          youth empowerment and sustainable development.
        </p>

      </div>

      {/* Director */}

      <div className="leader-box">

        <div className="leader-image">
          <img src={director} alt="Dr. Ashfaq Ahmad" />
        </div>

        <div className="leader-info">

          <h2>Dr. Ashfaq Ahmad</h2>

          <h4>Director</h4>

          <p>
            Dr. Ashfaq Ahmad is a dedicated social activist and media
            professional who has been actively involved in community
            service and social development initiatives for over five
            years.
          </p>

          <p>
            He has worked with Gulistan TV, Srinagar Observer,
            Daily Gadyal and various digital media platforms.
            Through RoshanKal Welfare Foundation he continues
            working for education, youth empowerment,
            environmental awareness and social welfare.
          </p>

        </div>

      </div>

      {/* Programme Manager */}

      <div className="leader-box reverse">

        <div className="leader-info">

          <h2>Ishfaq Ahmad Mir</h2>

          <h4>Programme Manager</h4>

          <p>
            Ishfaq Ahmad Mir is an educationist, Principal and
            social activist with extensive experience in community
            development and the non-profit sector.
          </p>

          <p>
            He has worked with several NGOs leading initiatives
            related to education, youth empowerment,
            social awareness and community welfare.
          </p>

        </div>

        <div className="leader-image">
          <img src={manager} alt="Programme Manager" />
        </div>
<div className="back-btn-box">

  <button
    className="back-btn"
    onClick={() => navigate("/")}
  >
    ← Back to Home
  </button>

</div>
      </div>

    </section>
  );
}

export default Leadership;