"use client";

import { handleJoin } from "@/api/join";
import { Member } from "@/types/member";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function JoinForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<Member>();

  const onSubmit = async (data: Member) => {
    const result = await handleJoin(data);
    console.log("result", result);
    if (result.message === "회원가입이 완료되었습니다.") {
      router.push("/login");
    } else {
      alert("join failed: " + result.message);
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
          id="password	"
          {...register("password", {
            required: "required",
            minLength: {
              value: 5,
              message: "min length is 5",
            },
          })}
          type="password"
        />
        <label htmlFor="passwordCheck">passwordCheck</label>
        <input
          id="passwordCheck"
          {...register("passwordCheck", {
            required: "required",
          })}
          type="password"
        />
        <label htmlFor="name">name</label>
        <input
          id="name"
          {...register("name", {
            required: "required",
          })}
          type="text"
        />
        <label htmlFor="nickname">nickname</label>
        <input
          id="nickname"
          {...register("nickname", {
            required: "required",
          })}
          type="text"
        />
        <label htmlFor="hp">hp</label>
        <input
          id="hp"
          {...register("hp", {
            required: "required",
          })}
          type="text"
        />
        <label htmlFor="email">email</label>
        <input
          id="email"
          {...register("email", {
            required: "required",
          })}
          type="email"
        />
        <label htmlFor="zipcode">zipcode</label>
        <input
          id="zipcode"
          {...register("zipcode", {
            required: "required",
          })}
          type="text"
        />
        <label htmlFor="address">address</label>
        <input
          id="address"
          {...register("address", {
            required: "required",
          })}
          type="text"
        />
        <label htmlFor="addressDetail">addressDetail</label>
        <input
          id="addressDetail"
          {...register("addressDetail", {
            required: "required",
          })}
          type="text"
        />
        <label htmlFor="residenceType">residenceType</label>
        <input
          id="residenceType"
          {...register("residenceType", {
            required: "required",
          })}
          type="text"
        />
        <label htmlFor="gender">gender</label>
        <input
          id="gender"
          {...register("gender", {
            required: "required",
          })}
          type="text"
        />
        <label htmlFor="favoritePlant">favoritePlant</label>
        <input
          id="favoritePlant"
          {...register("favoritePlant", {
            required: "required",
          })}
          type="text"
        />
        <label htmlFor="intro">intro</label>
        <input
          id="intro"
          {...register("intro", {
            required: "required",
          })}
          type="text"
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
