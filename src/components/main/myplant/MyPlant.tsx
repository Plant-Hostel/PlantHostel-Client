import React from "react";
import MainTitle from "../MainTitle";
import NonExistPlant from "./NonExistPlant";
import ExistPlant from "./ExistPlant";

export default function MyPlant() {
  return (
    <div>
      <MainTitle title="나의 반려식물" className="mb-3" />
      {/* <NonExistPlant /> */}
      <ExistPlant />
    </div>
  );
}
