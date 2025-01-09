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
        <label htmlFor="userId">ID</label>
        <CommonInput icon={<Show />} />
        <input
          id="userId"
          {...register("userId", {
            required: "required",
          })}
          type="text"
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          {...register("password", {
            required: "required",
            minLength: {
              value: 5,
              message: "min length is 5",
            },
          })}
          type="password"
        />
        <CommonButton type="submit">로그인</CommonButton>
      </form>
    </div>
  );
}
