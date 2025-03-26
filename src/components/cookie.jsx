"use client"; // Sikrer, at komponenten kun kører på klienten (Next.js-specifikt)

import { useState, useEffect } from "react";

const CookieConsent = (props) => {
  // "State" til at styre, om cookie-popuppen skal vises
  const [showPopup, setShowPopup] = useState(false);

  // useEffect kører én gang ved første render og tjekker localStorage
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent"); // Henter gemt cookie-valg
    if (!consent) {
      setShowPopup(true); // Viser popuppen, hvis brugeren ikke har accepteret endnu
    }
  }, []);

  // Funktion der håndterer accept af cookies
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true"); // Gemmer accept i localStorage
    setShowPopup(false); // Skjuler popuppen
  };

  return (
    showPopup && ( // Kun vis popuppen, hvis showPopup er true
      <div className="cookie-consent">
        <p>{props.message || "Vi bruger cookies for at forbedre din oplevelse."}</p>
        <button onClick={handleAccept} className="cookie-consent-button">
          {props.buttonText || "Accepter"}
        </button>
      </div>
    )
  );
};

export default CookieConsent; // Eksporterer komponenten til brug i andre filer
