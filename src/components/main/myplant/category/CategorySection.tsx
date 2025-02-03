import React from "react";
import Hospital from "@/images/main/Hospital.svg";
import Hotel from "@/images/main/hotel.svg";
import Shop from "@/images/main/Shop.svg";
import CategoryUnit from "./CategoryUnit";

export default function CategorySection() {
  return (
    <div className="flex gap-4">
      <CategoryUnit icon={<Hospital />} title="병원 예약" rink={"/"} />
      <CategoryUnit icon={<Hotel />} title="호텔 예약" rink={"/"} />
      <CategoryUnit icon={<Shop />} title="스토어" rink={"/"} />
    </div>
  );
}
