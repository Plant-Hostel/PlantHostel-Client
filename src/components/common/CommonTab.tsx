"use client";

import clsx from "clsx";
import React, { useState } from "react";

type TabItem = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  defaultActiveIndex?: number; //default 활성화 탭
};

export default function CommonTab({ tabs, defaultActiveIndex = 0 }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveIndex);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={clsx(
              `flex-1 text-center w-[175px] h-[52px] border-b-[2px] border-b-primary`,
              activeTab === index
                ? "bg-primary text-white" //활성화
                : "bg-inherit text-black" //비활성화
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab]?.content}</div>
    </div>
  );
}
