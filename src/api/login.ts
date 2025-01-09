import axios from "axios";

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

    return response.data; // JSON 데이터를 반환
  } catch (err) {
    console.error("Login error:", err);
    throw err; // 필요하면 에러를 다시 던져 호출자에서 처리
  }
};
