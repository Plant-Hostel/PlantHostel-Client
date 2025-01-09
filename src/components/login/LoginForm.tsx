"use client";

import { handleLogin } from "@/api/login";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface FormValues {
  userId: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter(); // useRouter 초기화

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const result = await handleLogin(data.userId, data.password);
    console.log("result", result);
    if (result.message === "로그인 성공") {
      router.push("/");
    } else {
      alert("Login failed: " + result.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="userId">ID</label>
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
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
