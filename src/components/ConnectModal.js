import React from "react";
import { FaTimes } from "react-icons/fa";

function ConnectModal({ open }) {
  if (!open) return null;
  return (
    <>
      <div className="overlay">
        <div className="modal-container">
          <div className="connect-wallet">
            <h3>Connect Wallet</h3>
            <FaTimes />
          </div>
          <p>Choose your preferred wallet:</p>
          <button>
            <img src="/images/musk-logo.png" alt="Metamusk logo " />
            MetaMusk
          </button>
          <button>
            <img src="/images/swlogo.png" alt="Metamusk logo " />
            WalletConnect
          </button>
        </div>
      </div>
    </>
  );
}

export default ConnectModal;
