"use client";

import { handleLogin } from "@/api/login";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import CommonButton from "../common/CommonButton";
import CommonInput from "../common/CommonInput";
import Show from "@/images/Show.svg";
import CommonCheckbox from "../common/CommonCheckbox";
import Kakao from "@/images/login/kakao.svg";
import Naver from "@/images/login/naver.svg";
import Google from "@/images/login/google.svg";
import Link from "next/link";

interface FormValues {
  userId: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const result = await handleLogin(data.userId, data.password);
    if (result.status === 200) {
      router.push("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[14px]"
      >
        <div>
          <div className="flex flex-col gap-5 mb-[14px]">
            <CommonInput
              id="userId"
              label="아이디"
              placeholder="아이디를 입력해주세요"
              {...register("userId", { required: "ID is required" })}
            />
            <CommonInput
              id="password"
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              {...register("password", { required: "PASSWORD is required" })}
              icon={<Show />}
            />
          </div>
          <div className="flex justify-between px-1">
            <CommonCheckbox id="saveId" label="아이디 저장" />
            <Link href={"/"}>아이디/비밀번호 &gt;</Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 py-6">
          <CommonButton color="social" textcolor="sub02" className="flex gap-2">
            <Kakao /> 카카오 로그인
          </CommonButton>
          <CommonButton color="social" textcolor="sub02" className="flex gap-2">
            <Naver /> 네이버 로그인
          </CommonButton>
          <CommonButton color="social" textcolor="sub02" className="flex gap-2">
            <Google /> 구글 로그인
          </CommonButton>
        </div>

        <div>
          <CommonButton type="submit">로그인</CommonButton>
          <Link href={"/"} className="block text-center py-3 text-[13px]">
            아직 회원이 아니신가요?
            <span className="text-primary"> 회원가입</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
