import CommonTab from "@/components/common/CommonTab";
import FindId from "@/components/member/FindId";
import FindPwd from "@/components/member/FindPwd";
import React from "react";

export default function page() {
  // 아이디 비밀번호찾기 탭
  const tabs = [
    { label: "아이디", content: <FindId /> },
    { label: "비밀번호", content: <FindPwd /> },
  ];
  return (
    <div>
      <CommonTab tabs={tabs} />
    </div>
  );
}
