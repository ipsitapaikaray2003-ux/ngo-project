import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonial-heading">
        <span>TESTIMONIALS</span>
        <h2>What People Say About Us</h2>
        <p>
          Our journey is reflected through the voices of the people
          whose lives we have touched.
        </p>
      </div>

      <div className="testimonial-container">

        <div className="testimonial-card">

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <p>
            Roshan Kal Welfare Foundation has helped many children
            continue their education. Their dedication towards society
            is truly inspiring.
          </p>

          <h3>Rahul Sharma</h3>

          <span>Volunteer</span>

        </div>

        <div className="testimonial-card">

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <p>
            I learned computer skills through their training program,
            which helped me get my first job. Thank you for changing
            my life.
          </p>

          <h3>Priya Das</h3>

          <span>Student</span>

        </div>

        <div className="testimonial-card">

          <div className="stars">
            ⭐⭐⭐⭐⭐
          </div>

          <p>
            Their healthcare camps and awareness programs have made
            a real difference in our community.
          </p>

          <h3>Amit Kumar</h3>

          <span>Community Member</span>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;