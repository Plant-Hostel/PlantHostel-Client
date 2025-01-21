"use client";

import React, { useState } from "react";
import CommonCheckbox from "../common/CommonCheckbox";
import MethodPhone from "./MethodPhone";
import MethodEmail from "./MethodEmail";

export default function FindId() {
  const [findMethod, setFindMethod] = useState<string>("phone");

  return (
    <div>
      <div className="flex gap-2 mb-6">
        <CommonCheckbox
          id="phone"
          type="radio"
          name="findMethod"
          label="휴대폰으로 찾기"
          checked={findMethod === "phone"}
          onChange={(e) => {
            setFindMethod(e.target.id);
          }}
        />
        <CommonCheckbox
          id="email"
          type="radio"
          name="findMethod"
          label="이메일로 찾기"
          checked={findMethod === "email"}
          onChange={(e) => {
            setFindMethod(e.target.id);
          }}
        />
      </div>
      {findMethod === "phone" ? (
        <MethodPhone type="pwd" /> //비밀번호 찾기일 경우
      ) : (
        <MethodEmail type="pwd" />
      )}
    </div>
  );
}
