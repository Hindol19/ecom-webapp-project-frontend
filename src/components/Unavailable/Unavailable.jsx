import React from "react";
import "./Unavailable.scss";
function Unavailable() {
  return (
    <div className="unavailable-container">
      <div className="unavailable-layout">
        <h1 className="line1">Sorry :)</h1>
        <h1 className="line2">This Feature is not available at this moment</h1>
      </div>
    </div>
  );
}

export default Unavailable;
