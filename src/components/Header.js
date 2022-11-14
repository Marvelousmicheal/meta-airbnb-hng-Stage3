import React from "react";
import { useState } from "react";
import ConnectModal from "./ConnectModal";
import { Link } from "react-router-dom";

function Header() {
  const [openModal, SetModal] = useState(false);
  function modal() {
    SetModal(true);
  }
  function onClose() {
    SetModal(false);
  }
  return (
    <>
      <ConnectModal open={openModal} onClose={onClose} />
      <header>
        <nav className="flex-sb">
          <div className="logo-section">
            <img src="/images/logo (2).png" alt="logo" id="logo" />
            <img src="/images/logo-text.png" alt="Meta airbnb" id="logo-text" />
          </div>
          <div className="nav-link">
            <ul className="flex flex-e">
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
          </div>
          <button className="connect" onClick={modal}>
            <a href="#">Connect Wallets</a>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;