import "./DonationModal.css";
import { useState } from "react";
import { FaTimes, FaHeart } from "react-icons/fa";

function DonationModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState("");

  if (!isOpen) return null;

  const presetAmounts = [100, 500, 1000, 5000];

  const handlePay = () => {
    console.log("Donate Clicked");
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const upiId = "JKBMERC00722360@jkb";
    const beneficiary = "ROSHANKAL WELFARE FOUNDATION";

    const paymentUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
      beneficiary
    )}&am=${amount}&cu=INR`;

    window.location.href = paymentUrl;
  };

  return (
    <div className="donation-modal-overlay">
      <div className="donation-modal">

        <button
          className="donation-close"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <div className="donation-heart">
          <FaHeart />
        </div>

        <h2>Support Our Mission</h2>

        <p>
          Your contribution helps us provide education,
          healthcare, women empowerment and community
          development.
        </p>

        <div className="donation-amounts">
          {presetAmounts.map((item) => (
            <button
              key={item}
              onClick={() => setAmount(item)}
              className={amount == item ? "active" : ""}
            >
              ₹{item}
            </button>
          ))}
        </div>

        <input
          type="number"
          placeholder="Enter Custom Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button
          className="donation-pay-btn"
          onClick={handlePay}
        >
          Donate Now ❤️
        </button>

      </div>
    </div>
  );
}

export default DonationModal;