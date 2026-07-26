import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DonationModal from "./DonationModal/DonationModal";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDonation, setOpenDonation] = useState(false);

  // Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

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

        {/* Hamburger */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#mission" onClick={closeMenu}>
              Mission
            </a>
          </li>

          <li>
            <a href="#programs" onClick={closeMenu}>
              Programs
            </a>
          </li>

          <li>
            <a href="#gallery" onClick={closeMenu}>
              Gallery
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

          {/* Mobile Donate */}
          <li className="mobile-donate">
            <button
              className="donate"
              onClick={() => {
                setOpenDonation(true);
                closeMenu();
              }}
            >
              Donate Now
            </button>
          </li>
        </ul>

        {/* Desktop Donate */}
        <button
          className="donate desktop-donate"
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