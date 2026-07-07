import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";


function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={sticky ? "navbar active" : "navbar"}>

      <div className="logo">
        <img src={logo} alt="RoshanKal Logo" className="logo-img" />

        <div className="logo-text">
          <h2>ROSHANKAL</h2>
          <p>WELFARE FOUNDATION</p>
        </div>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#mission">Mission</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#donate" className="donate">
  Donate Now
</a>
    </nav>
  );
}

export default Navbar;