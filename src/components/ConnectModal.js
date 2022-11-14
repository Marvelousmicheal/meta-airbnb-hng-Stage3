import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function ConnectModal({ open, onClose }) {
  if (!open) return null;
  function stopPro(e) {
    e.stopPropagation();
  }
  return (
    <>
      <div className="overlay" onClick={onClose}>
        <div className="modal-container" onClick={stopPro}>
          <div className="connect-wallet">
            <h3>Connect Wallet</h3>
            <FaTimes cursor="pointer" onClick={onClose} />
          </div>
          <p>Choose your preferred wallet:</p>
          <div className="btn-group">
            <button>
              <div className="flex">
                <img src="/images/musk-logo.png" alt="Metamusk logo " />
                MetaMusk
              </div>
              <FaAngleRight />
            </button>
            <button>
              <div className="flex">
                <img src="/images/swlogo.png" alt="Metamusk logo " />
                WalletConnect
              </div>
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectModal;
