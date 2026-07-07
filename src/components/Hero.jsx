import "./Hero.css";
import { useEffect, useState } from "react";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.avif";
import hero3 from "../assets/hero3.avif";
import hero4 from "../assets/hero4.avif";

function Hero() {

  const images = [hero1, hero2, hero3,hero4];

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const slider = setInterval(() => {

      setIndex((prev) => (prev + 1) % images.length);

    }, 4000);

    return () => clearInterval(slider);

  }, []);

  return (

    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `url(${images[index]})`,
      }}
    >

      <div className="overlay">

        <div
          className="hero-content"
          data-aos="fade-right"
        >

          <span>
            Empowering Communities Since 2016
          </span>

          <h1>
            Together We Can
            <br />
            Change Lives
          </h1>

          <p>
            RoshanKal Welfare Foundation is dedicated to education,
            women empowerment, healthcare, environmental protection
            and sustainable community development.
          </p>

          <div className="hero-buttons">

            
          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;