import React from "react";
import "../App.css";
import chefClaudeLogo from "/images/header.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img className="header-logo" src={chefClaudeLogo} alt="chef icon" />
        <span className="header-text">Cheff Claude</span>
      </header>
    </>
  );
}
