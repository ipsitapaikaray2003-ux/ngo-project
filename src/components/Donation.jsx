import "./Donation.css";
import qr from "../assets/qr_code.png";

function Donation() {
  return (
    <section className="donation" id="donate">

      <div className="donation-left">
        <span>SUPPORT OUR MISSION</span>

        <h2>Every Donation Creates Hope</h2>

        <p>
          Your contribution helps us provide education, healthcare,
          skill development and social welfare programs for
          underprivileged communities.
        </p>

        <ul>
          <li>✔ Education Support</li>
          <li>✔ Women Empowerment</li>
          <li>✔ Healthcare Camps</li>
          <li>✔ Community Development</li>
        </ul>

        
      </div>

      <div className="donation-right">

        <div className="qr-card">

          <img src={qr} alt="Donation QR" />

          <h3>Scan & Donate</h3>

          <p>
            Support Roshan Kal Welfare Foundation
          </p>

        </div>

      </div>

    </section>
  );
}

export default Donation;