import React from "react";

import "./ChartBar.css";

const Chartbar = (props) => {
  let barFillHeight = "0%";
  if (props.maxVal > 0) {
    barFillHeight = Math.round((props.value / props.maxVal) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__lavel">{props.label}</div>
    </div>
  );
};

export default Chartbar;
