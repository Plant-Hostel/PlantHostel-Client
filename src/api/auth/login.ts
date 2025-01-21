import axios from "axios";

//로그인
export const handleLogin = async (userId: string, password: string) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/login`,
      {
        userId,
        password,
      },
      {
        withCredentials: true, // 쿠키 포함
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.response) {
      const status = err.response.status;
      if (status === 401) {
        return {
          success: false,
          message: "아이디 또는 비밀번호를 확인해주세요.",
        };
      }
      if (status === 500) {
        return {
          success: false,
          message: "서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.",
        };
      }
    }
  }
};
