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
      throw new Error(`Login failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("err", err);
  }
};
