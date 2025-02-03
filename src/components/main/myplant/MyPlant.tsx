import React from "react";
import NonExistPlant from "./NonExistPlant";
import ExistPlant from "./ExistPlant";
import CategorySection from "./category/CategorySection";

const IsExistPlant = true;

export default function MyPlant() {
  return (
    <div>
      <div className="mb-3 text-xl">나의 반려식물</div>
      {IsExistPlant ? <ExistPlant /> : <NonExistPlant />}
      <CategorySection />
      <div className="-mx-5 h-3 bg-[#E5E5E5] mt-8 mb-10"></div>
    </div>
  );
}
