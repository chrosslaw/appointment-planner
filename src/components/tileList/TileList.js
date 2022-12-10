import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ listData }) => {
  return (
    <div>
      {listData.map((listData, index) => (
        <Tile listData={listData} key={index} />
      ))}
    </div>
  );
};
