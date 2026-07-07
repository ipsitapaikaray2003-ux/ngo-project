import "./Gallery.css";

import img1 from "../assets/gallery1.png";
import img2 from "../assets/gallery2.png";
import img3 from "../assets/gallery3.png";
import img4 from "../assets/gallery4.png";
import img5 from "../assets/gallery5.jpg";
import img6 from "../assets/gallery6.jpg";

function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <div className="gallery-heading">
        <span>OUR GALLERY</span>
        <h2>Moments of Hope & Impact</h2>
        <p>
          Every picture tells a story of hope, compassion and positive
          change in the lives of people we serve.
        </p>
      </div>

      <div className="gallery-grid">

        <div className="gallery-item">
          <img src={img1} alt="Education Program" />
        </div>

        <div className="gallery-item">
          <img src={img2} alt="Health Camp" />
        </div>

        <div className="gallery-item">
          <img src={img3} alt="Women Empowerment" />
        </div>

        <div className="gallery-item">
          <img src={img4} alt="Skill Development" />
        </div>

        <div className="gallery-item">
          <img src={img5} alt="Tree Plantation" />
        </div>

        <div className="gallery-item">
          <img src={img6} alt="Community Welfare" />
        </div>

      </div>

    </section>
  );
}

export default Gallery;