import React from "react";

const Chip = ({ color = "gray", children, className }) => {
  return (
    <div className={`chip ${className} ${color}`}>
      <small>{children}</small>
    </div>
  );
};

export default Chip;
