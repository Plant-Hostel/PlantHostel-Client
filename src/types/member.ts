import z from "zod";

export const MemberSchema = z
  .object({
    userId: z
      .string()
      .nonempty("아이디를 입력해주세요")
      .min(6, "아이디는 최소 6자리 이상이어야 합니다"),
    password: z
      .string()
      .nonempty("비밀번호를 입력해주세요")
      .min(8, "비밀번호는 최소 8자리 이상이어야 합니다"),
    passwordCheck: z.string().nonempty("비밀번호 확인을 입력해주세요"),
    nickname: z.string().nonempty("닉네임을 입력해주세요"),
    hp: z
      .string()
      .regex(/^\d{10,11}$/, "전화번호는 -를 제외한 10~11자리 숫자여야 합니다"),
    email: z.string().email("유효한 이메일 형식이 아닙니다"),
    zipcode: z.string().nonempty("우편번호를 입력해주세요"),
    address: z.string().nonempty("주소를 입력해주세요"),
    addressDetail: z.string().nonempty("상세주소를 입력해주세요"),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["passwordCheck"],
  });

export type MemberSchemaType = z.infer<typeof MemberSchema>;
