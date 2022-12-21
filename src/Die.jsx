import React from "react";

// using destructured props in Die component
export default function Die({ value, isHeld }) {
  const styles = { backgroundColor: isHeld ? "#59E391" : "white" };
  return (
    <div className="die-face" style={styles}>
      <h2 className="die-num">{value}</h2>
    </div>
  );
}
