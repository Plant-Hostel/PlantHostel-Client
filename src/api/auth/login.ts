//로그인
export const handleLogin = async (userId: string, password: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/auth/login`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          password,
        }),
      }
    );
    if (!response.ok) {
      switch (response.status) {
        case 401:
          alert("아이디 또는 비밀번호가 올바르지 않습니다.");
        default:
          throw new Error(
            `알 수 없는 오류가 발생했습니다. 상태 코드: ${response.status}`
          );
      }
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
