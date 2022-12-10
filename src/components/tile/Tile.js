import React from "react";

export const Tile = ({ listData }) => {
  return (
    <div className="tile-container">
      {Object.values(listData).map((value, index) => {
        if (index === 0) {
          return (
            <p className="tile-title" key={index}>
              {value}
            </p>
          );
        } else {
          return (
            <p className="tile" key={index}>
              {value}
            </p>
          );
        }
      })}
    </div>
  );
};
