import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";
import DonationModal from "./DonationModal/DonationModal";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [openDonation, setOpenDonation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={sticky ? "navbar active" : "navbar"}>

        <div className="logo">
          <img
            src={logo}
            alt="RoshanKal Logo"
            className="logo-img"
          />
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#mission">Mission</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button
          className="donate"
          onClick={() => setOpenDonation(true)}
        >
          Donate Now
        </button>

      </nav>

      <DonationModal
        isOpen={openDonation}
        onClose={() => setOpenDonation(false)}
      />
    </>
  );
}

export default Navbar;