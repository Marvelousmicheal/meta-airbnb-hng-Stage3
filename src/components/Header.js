import React from "react";
import { useState } from "react";
import ConnectModal from "./ConnectModal";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Header() {
  const [openModal, SetModal] = useState(false);
  function modal() {
    SetModal(true);
  }
  function onClose() {
    SetModal(false);
  }
  function handleClick() {
    setisMobile(!isMobile);
  }
  const [isMobile, setisMobile] = useState(false);
  return (
    <>
      <ConnectModal open={openModal} onClose={onClose} />

      <header>
        <nav>
          <div className="nav-container flex-sb">
            <div className="logo-section">
              <img src="/images/logo (2).png" alt="logo" id="logo" />
              <img
                src="/images/logo-text.png"
                alt="Meta airbnb"
                id="logo-text"
              />
            </div>
            <div className={isMobile ? "nav-link active" : "nav-link"}>
              <ul className="flex flex-sb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/placeToRent">Place to stay</Link>
                </li>
                <li>
                  <a href="#">NFTs</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
              <button className="connect" onClick={modal}>
                <a href="#">Connect Wallets</a>
              </button>
            </div>

            <div className="mobile" onClick={handleClick}>
              {isMobile ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
