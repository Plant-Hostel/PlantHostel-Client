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
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
