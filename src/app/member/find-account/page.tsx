import CommonTab from "@/components/common/CommonTab";
import FindId from "@/components/member/FindId";
import FindPwd from "@/components/member/FindPwd";
import React from "react";

export default function page() {
  // 아이디 비밀번호찾기 탭
  const tabs = [
    { label: "아이디", content: <FindId /> }, //아이디 찾기
    { label: "비밀번호", content: <FindPwd /> }, //비밀번호 찾기
  ];
  return <CommonTab tabs={tabs} className="mb-3" />;
}
