import React from "react";

// using destructured props in Die component
export default function Die({ value }) {
  return (
    <div className="die-face">
      <h2 className="die-num">{value}</h2>
    </div>
  );
}
