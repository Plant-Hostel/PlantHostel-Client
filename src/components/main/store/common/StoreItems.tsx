import React from "react";
import StoreItem from "./StoreItem";

export default function StoreItems() {
  return (
    <div className="grid grid-cols-3 gap-4 mb-12">
      <StoreItem /> <StoreItem /> <StoreItem />
      <StoreItem /> <StoreItem /> <StoreItem />
    </div>
  );
}
