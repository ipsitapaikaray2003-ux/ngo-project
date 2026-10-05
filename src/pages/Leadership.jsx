import "./Leadership.css";
import { useNavigate } from "react-router-dom";

import director from "../assets/director.png";
import manager from "../assets/manager.jpeg";
import anjum from "../assets/anjum-saleem.png";
import omar from "../assets/omar-chuk.png";
import snober from "../assets/snober-bashir.png";
import waqar from "../assets/waqar-ahmad.png";
import salma from "../assets/salma-saleem.png";
import zahoor from "../assets/zahoor-ahmad.png";
import obaid from "../assets/obaid-ayoob.png";

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
            service and social development initiatives for over five years.
          </p>

          <p>
            He has worked with Gulistan TV, Srinagar Observer,
            Daily Gadyal and various digital media platforms.
            Through RoshanKal Welfare Foundation he continues working
            for education, youth empowerment, environmental awareness
            and social welfare.
          </p>

        </div>

      </div>

      {/* Programme Manager */}

      <div className="leader-box reverse">

        <div className="leader-info">

          <h2>Ishfaq Ahmad Mir</h2>

          <h4>Programme Manager</h4>

          <p>
            Ishfaq Ahmad Mir is an educationist, Principal and social
            activist with extensive experience in community development
            and the non-profit sector.
          </p>

          <p>
            He has worked with several NGOs leading initiatives related
            to education, youth empowerment, social awareness and
            community welfare.
          </p>

        </div>

        <div className="leader-image">
          <img src={manager} alt="Programme Manager" />
        </div>

      </div>

      {/* Anjum Saleem */}

      <div className="leader-box">

        <div className="leader-image">
          <img src={anjum} alt="Anjum Saleem" />
        </div>

        <div className="leader-info">

          <h2>Anjum Saleem</h2>

          <h4>Director</h4>

          <p>
            Anjum Saleem provides strategic leadership and governance,
            participates in key organizational decisions, oversees
            policy implementation and supports organizational growth.
          </p>

          <p>
            She is committed to strengthening transparency,
            accountability and sustainable development while ensuring
            that the mission, vision and objectives of RoshanKal
            Welfare Foundation are achieved for the benefit of society.
          </p>

        </div>

      </div>

      {/* Omar Chuk */}

      <div className="leader-box reverse">

        <div className="leader-info">

          <h2>Omar Chuk</h2>

          <h4>Public Relations Officer (PRO)</h4>

          <p>
            Omar Chuk is responsible for managing public relations,
            maintaining communication with media, stakeholders and
            partner organizations while promoting the activities and
            initiatives of RoshanKal Welfare Foundation.
          </p>

          <p>
            He plays a key role in strengthening the organization's
            public image by coordinating publicity campaigns and
            building positive relationships with communities and
            partner organizations.
          </p>

        </div>

        <div className="leader-image">
          <img src={omar} alt="Omar Chuk" />
        </div>

      </div>
      {/* Snober Bashir */}

<div className="leader-box">

  <div className="leader-image">
    <img src={snober} alt="Snober Bashir" />
  </div>

  <div className="leader-info">

    <h2>Snober Bashir</h2>

    <h4>Social Welfare & Outreach Coordinator</h4>

    <p>
      Snober Bashir is responsible for planning and coordinating
      social welfare initiatives that support the Foundation's
      mission of community development and humanitarian service.
    </p>

    <p>
      She actively engages with local communities, organizes
      awareness and outreach programs, builds partnerships with
      stakeholders and ensures that welfare activities effectively
      reach and benefit the people who need them the most.
    </p>

  </div>

</div>

{/* Waqar Ahmad */}

<div className="leader-box reverse">

  <div className="leader-info">

    <h2>Waqar Ahmad</h2>

    <h4>Monitoring & Evaluation Officer</h4>

    <p>
      Waqar Ahmad is responsible for monitoring project activities,
      evaluating program performance and tracking progress against
      organizational goals to ensure the successful implementation
      of welfare initiatives.
    </p>

    <p>
      He collects and analyzes project data, prepares performance
      reports and supports continuous improvement by ensuring that
      programs are implemented effectively and achieve meaningful
      outcomes for the communities served by RoshanKal Welfare Foundation.
    </p>

  </div>

  <div className="leader-image">
    <img src={waqar} alt="Waqar Ahmad" />
  </div>
  </div>
  {/* Salma Saleem */}

<div className="leader-box">

  <div className="leader-image">
    <img src={salma} alt="Salma Saleem" />
  </div>

  <div className="leader-info">

    <h2>Salma Saleem</h2>

    <h4>Finance & Accounts Officer</h4>

    <p>
      Salma Saleem manages the financial records, budgeting,
      bookkeeping, expense tracking, fund utilization and financial
      reporting of RoshanKal Welfare Foundation. She ensures
      transparency, accountability and efficient financial management
      across all organizational activities.
    </p>

    <p>
      She also oversees compliance with financial policies, supports
      grant and donation management, prepares financial reports and
      contributes to the Foundation's mission by ensuring responsible
      utilization of resources for sustainable community development.
    </p>

  </div>

</div>

{/* Zahoor Ahmad Lone */}

<div className="leader-box reverse">

  <div className="leader-info">

    <h2>Zahoor Ahmad Lone</h2>

    <h4>Field Coordinator</h4>

    <p>
      Zahoor Ahmad Lone brings with him around 10 years of experience in
      social work and community engagement. Before taking up this role, he
      worked as a social activist and remained associated with various
      organisations, contributing to community-focused initiatives and
      public outreach activities. Over the past decade, he has gained
      experience in field coordination, community interaction, and grassroots
      engagement.
    </p>

    <p>
      In his new role as Field Coordinator, Zahoor is responsible for
      supporting field-level activities, coordinating with communities and
      stakeholders, and facilitating the effective implementation of
      organisational programmes. With his field experience and understanding
      of grassroots communities, he is expected to contribute to strengthening
      outreach and coordination at the ground level.
    </p>

  </div>

  <div className="leader-image">
    <img src={zahoor} alt="Zahoor Ahmad Lone" />
  </div>

</div>

{/* Obaid Ayoob */}

<div className="leader-box">

  <div className="leader-image">
    <img src={obaid} alt="Obaid Ayoob" />
  </div>

  <div className="leader-info">

    <h2>Obaid Ayoob</h2>

    <h4>Project Coordinator</h4>

    <p>
      Obaid Ayoob has been appointed as Project Coordinator, where he will
      oversee and support the planning, coordination, and implementation of
      various organisational projects. In this role, he will work closely with
      team members, field coordinators, partner organisations, and community
      stakeholders to ensure the smooth execution of projects and timely
      completion of assigned activities.
    </p>

    <p>
      His responsibilities include project planning, team coordination,
      field-level monitoring, documentation, stakeholder communication, and
      progress reporting. As Project Coordinator, Obaid Ayoob will contribute to
      strengthening organisational programmes and ensuring effective
      implementation of initiatives at the grassroots level.
    </p>

  </div>

</div>



      <div className="back-btn-box">

        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

      </div>

    </section>
  );
}

export default Leadership;