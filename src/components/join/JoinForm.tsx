"use client";

import { handleJoin } from "@/api/member/join";
import { MemberSchema, MemberSchemaType } from "@/types/member";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import CommonInput from "../common/CommonInput";
import CommonButton from "../common/CommonButton";
import { zodResolver } from "@hookform/resolvers/zod";

export default function JoinForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MemberSchemaType>({
    resolver: zodResolver(MemberSchema),
  });

  const onSubmit = async (data: MemberSchemaType) => {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5 mb-[14px]">
          {/* 아이디 */}
          <div>
            <div className="flex items-end gap-2">
              <CommonInput
                id="userId"
                label="아이디"
                placeholder="아이디를 입력해주세요"
                {...register("userId")}
                inputSize="smallButton"
              />

              <CommonButton
                size="small"
                type="button"
                onClick={() => console.log("중복확인")}
              >
                중복확인
              </CommonButton>
            </div>
            {errors.userId && (
              <p className="text-warning text-sm mt-1">
                {errors.userId.message}
              </p>
            )}
          </div>

          {/* 비밀번호 */}
          <div>
            <CommonInput
              id="password"
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-warning text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <CommonInput
              id="passwordCheck"
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 한 번 더 입력해주세요"
              {...register("passwordCheck")}
            />
            {errors.passwordCheck && (
              <p className="text-warning text-sm mt-1">
                {errors.passwordCheck.message}
              </p>
            )}
          </div>

          {/* 닉네임 */}
          <div>
            <CommonInput
              id="nickname"
              label="닉네임"
              placeholder="닉네임을 입력해주세요"
              {...register("nickname")}
            />
            {errors.nickname && (
              <p className="text-warning text-sm mt-1">
                {errors.nickname.message}
              </p>
            )}
          </div>

          {/* 전화번호 */}
          <div>
            <div className="flex items-end gap-2">
              <CommonInput
                id="hp"
                label="전화번호"
                placeholder="-제외 11자리를 입력해주세요"
                {...register("hp")}
              />
              <CommonButton
                size="small"
                type="button"
                onClick={() => console.log("인증번호")}
              >
                인증번호
              </CommonButton>
            </div>
            {errors.hp && (
              <p className="text-warning text-sm mt-1">{errors.hp.message}</p>
            )}
          </div>

          {/* 이메일 */}
          <div>
            <CommonInput
              id="email"
              label="이메일"
              type="email"
              placeholder="이메일을 입력해주세요"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-warning text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* 주소 */}
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex items-end gap-2">
                <CommonInput
                  id="zipcode"
                  label="우편번호"
                  placeholder="우편번호를 입력해주세요"
                  {...register("zipcode")}
                />
                <CommonButton
                  size="small"
                  type="button"
                  onClick={() => console.log("우편번호 찾기")}
                >
                  찾기
                </CommonButton>
              </div>
              {errors.zipcode && (
                <p className="text-warning text-sm mt-1">
                  {errors.zipcode.message}
                </p>
              )}
            </div>

            <CommonInput
              id="address"
              placeholder="주소를 입력해주세요"
              {...register("address")}
            />
            <div>
              <CommonInput
                id="addressDetail"
                placeholder="상세주소를 입력해주세요"
                {...register("addressDetail")}
              />
              {errors.addressDetail && (
                <p className="text-warning text-sm mt-1">
                  {errors.addressDetail.message}
                </p>
              )}
            </div>
          </div>
        </div>
        <CommonButton type="submit">다음으로</CommonButton>
      </form>
    </div>
  );
}
