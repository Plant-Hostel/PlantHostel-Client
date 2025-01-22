"use client";

import { handleJoin } from "@/api/member/join";
import { Member } from "@/types/member";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";

export default function JoinForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<Member>();

  const onSubmit = async (data: Member) => {
    const result = await handleJoin(data);
    console.log("result", result);
    if (result.status === 200) {
      alert("회원가입에 성공하였습니다! ");
      router.push("/login");
    } else {
      alert("join failed: " + result.message);
    }
  };

  return (
    <div>
      <div></div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 mb-[14px]">
          <div className="flex items-end gap-2">
            <CommonInput
              id="userId"
              label="아이디"
              placeholder="아이디를 입력해주세요"
              {...register("userId", { required: "ID is required" })}
              inputSize="smallButton"
            />
            <CommonButton size="small" onClick={() => console.log("중복확인")}>
              중복확인
            </CommonButton>
          </div>

          <CommonInput
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register("password", { required: "PASSWORD is required" })}
          />
          <CommonInput
            id="passwordCheck"
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 한 번 더 입력해주세요"
            {...register("passwordCheck", {
              required: "passwordCheck is required",
            })}
          />
          <CommonInput
            id="nickname"
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            {...register("nickname", { required: "nickname is required" })}
          />
          <div className="flex items-end gap-2">
            <CommonInput
              id="hp"
              label="전화번호"
              placeholder="-제외 11자리를 입력해주세요"
              {...register("hp", { required: "hp is required" })}
            />
            <CommonButton size="small">인증번호</CommonButton>
          </div>

          <CommonInput
            id="email"
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요"
            {...register("email", { required: "email is required" })}
          />
          <div className="flex items-end gap-2">
            <CommonInput
              id="zipcode"
              label="우편번호"
              placeholder="우편번호를 입력해주세요"
              {...register("zipcode", { required: "zipcode is required" })}
            />
            <CommonButton size="small">찾기</CommonButton>
          </div>
          <CommonInput
            id="address"
            placeholder="주소를 입력해주세요"
            {...register("address", { required: "address is required" })}
          />
          <CommonInput
            id="addressDetail"
            placeholder="상세주소를 입력해주세요"
            {...register("addressDetail", {
              required: "addressDetail is required",
            })}
          />
        </div>
        <CommonButton type="submit">회원가입</CommonButton>
      </form>
    </div>
  );
}
