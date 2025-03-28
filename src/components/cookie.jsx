"use client";

import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { BiSolidCookie } from "react-icons/bi";

const CookiePopup = () => {
  // State til at styre, om popuppen skal vises
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Tjekker om brugeren allerede har accepteret cookies
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowPopup(true); // Viser popuppen, hvis der ikke er givet samtykke
    }
  }, []); // Kører kun ved første render

  // Funktion til at acceptere cookies
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true"); // Gemmer samtykke i localStorage
    setShowPopup(false); // Skjuler popuppen
  };

  return (
    /*"&&" hvis ALT ovenfor er true*/
    showPopup && (
      <article className="cookiePopup">
        <div className="icons">
          {/* Cookie ikon */}
          <BiSolidCookie className="cookie" />
          {/* Lukkeikon med onClick-handler til at skjule popuppen */}
          <RxCross2 className="cross" onClick={() => setShowPopup(false)} />
        </div>
        {/* Tekstbesked */}
        <p className="paragraph">We use cookies to improve your user experience</p>
        {/* Knap til at acceptere cookies */}
        <button className="button" onClick={handleAccept}>
          I like Cookies
        </button>
      </article>
    )
  );
};

export default CookiePopup;
