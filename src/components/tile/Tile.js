import React from "react";

export const Tile = ({ props }) => {
  return (
    <div className="tile-container">
      {props.forEach((obj) => {
        if (obj.key === 0) {
          return <p className="tile-title"></p>;
        } else {
          return <p className="tile"></p>;
        }
      })}
    </div>
  );
};
