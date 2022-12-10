import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ listData }) => {
  return (
    <div>
      {listData.map((value, index) => (
        <Tile value={value} key={index} />
      ))}
    </div>
  );
};
