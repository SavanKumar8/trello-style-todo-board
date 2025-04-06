import React from "react";

export default function Button({ label, icon, onClick, className }) {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {icon && (
        <img
          src={icon}
          alt="icon"
          className="btn-icon"
          width={20}
          height={20}
        />
      )}
      <span>{label}</span>
    </button>
  );
}
