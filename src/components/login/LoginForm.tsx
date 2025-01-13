"use client";

import { handleLogin } from "@/api/login";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import CommonButton from "../common/CommonButton";
import CommonInput from "../common/CommonInput";
import Show from "@/images/Show.svg";

interface FormValues {
  userId: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const result = await handleLogin(data.userId, data.password);
    console.log("result", result);
    if (result.status === 200) {
      router.push("/");
    } else {
      alert("Login failed: " + result.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          {...register("password")}
          icon={<Show />}
        />
        <CommonButton type="submit">로그인</CommonButton>
      </form>
    </div>
  );
}
