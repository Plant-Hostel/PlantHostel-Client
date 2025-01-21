import React from "react";
import CommonInput from "../../../common/CommonInput";
import CommonButton from "../../../common/CommonButton";

//휴대폰으로 찾기
export default function MethodPhone({ type }: { type: "id" | "pwd" }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col">
        <span className="font-PretendardSemibold">
          등록된 휴대번화 번호로 찾기
        </span>
        <span className="text-[14px]">
          가입 당시 입력한 휴대전화 번호를 통해 인증해주세요
        </span>
      </div>
      {type === "pwd" && (
        <CommonInput id="id" placeholder="아이디를 입력해주세요" />
      )}
      <div className="flex flex-col gap-2">
        <div className="flex items-end gap-2">
          <CommonInput
            label="전화번호"
            id="hp"
            placeholder="- 제외 11자리를 입력해주세요"
            inputSize="smallButton"
          />
          <CommonButton>인증요청</CommonButton>
        </div>
        <div className="flex items-end gap-2">
          <CommonInput
            id="hp"
            placeholder="6자리 인증번호를 입력해주세요"
            inputSize="smallButton"
            icon={<div className="text-warning">2:30</div>}
          />
          <CommonButton>확인</CommonButton>
        </div>
        <p className="text-[13px]">
          3분 이내로 인증번호를 입력해주세요.
          <br /> 제한시간이 지났거나 인증 메일을 받지 못 한 경우
          <br /> 인증번호를 다시 받아 주세요.
        </p>
      </div>
      <CommonButton>다음</CommonButton>
    </div>
  );
}
