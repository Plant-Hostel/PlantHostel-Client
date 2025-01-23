"use client";

import { handleLogin } from "@/api/auth/login";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CommonButton from "../common/CommonButton";
import CommonInput from "../common/CommonInput";
import Show from "@/images/login/PwdShow.svg";
import Hide from "@/images/login/PwdHide.svg";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<FormValues>();

  const [saveId, setSaveId] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const userId = watch("userId");
  const password = watch("password");

  const onSubmit = async (data: FormValues) => {
    const result = await handleLogin(data.userId, data.password);
    if (result.status === 200) {
      router.push("/");
    } else if (result.status === 401) {
      setError("password", {
        type: "server",
        message: "비밀번호가 올바르지 않습니다.", //추후에 상태값 분기 처리
      });
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
            <div>
              <CommonInput
                id="userId"
                label="아이디"
                placeholder="아이디를 입력해주세요"
                color={errors.password && "warning"}
                {...register("userId", {
                  required: "아이디를 입력해 주세요",
                })}
              />
              {errors.userId && (
                <p className="text-warning text-[15px] mt-1">
                  {errors.userId.message}
                </p>
              )}
            </div>
            <div>
              <CommonInput
                id="password"
                label="비밀번호"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="비밀번호를 입력해주세요"
                color={errors.password && "warning"}
                {...register("password", {
                  required: "비밀번호를 입력해 주세요",
                })}
                icon={
                  <button
                    className="flex justify-center items-center"
                    type="button"
                    onClick={() => setIsPasswordVisible((prev) => !prev)} //비밀번호 감추기
                  >
                    {isPasswordVisible ? <Show /> : <Hide />}
                  </button>
                }
              />
              {errors.password && (
                <p className="text-warning text-[15px] mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-between px-1">
            <CommonCheckbox
              type="checkbox"
              id="saveId"
              label="아이디 저장"
              onChange={(e) => {
                setSaveId(e.target.checked);
              }}
            />
            <Link href={"/member/find-account"}>아이디/비밀번호 &gt;</Link>
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
          <CommonButton
            type="submit"
            disabled={!userId || !password}
            color={!userId || !password ? "disabled" : "primary"}
          >
            로그인
          </CommonButton>
          <Link href={"/join"} className="block text-center py-3 text-[13px]">
            아직 회원이 아니신가요?
            <span className="text-primary"> 회원가입</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
