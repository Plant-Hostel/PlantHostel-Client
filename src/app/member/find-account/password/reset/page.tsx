"use client";

import CommonInput from "@/components/common/CommonInput";
import React, { useState } from "react";
import Hide from "@/images/Hide.svg";
import CommonButton from "@/components/common/CommonButton";

export default function Page() {
  const [resetPwd, setResetPwd] = useState("");
  const [resetPwdCheck, setResetPwdCheck] = useState("");

  const handleclick = () => {
    console.log(resetPwd, resetPwdCheck);
  };
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span>아이디</span>
          <span>planthostel123</span>
        </div>
        <CommonInput
          id="pwd"
          label="비밀번호"
          onChange={(e) => setResetPwd(e.target.value)}
          icon={<Hide />}
        />
        <CommonInput
          id="pwdCheck"
          label="비밀번호 확인"
          onChange={(e) => setResetPwdCheck(e.target.value)}
          icon={<Hide />}
        />
      </div>
      <div>
        <CommonButton
          onClick={() => {
            handleclick();
          }}
        >
          완료
        </CommonButton>
      </div>
    </div>
  );
}
