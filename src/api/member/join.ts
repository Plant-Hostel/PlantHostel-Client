import { Member } from "@/types/member";

//회원가입
export const handleJoin = async (memberData: Member) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/members/join`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...memberData,
        }),
      }
    );
    console.log("Res", response);
    if (!response.ok) {
      throw new Error(`join failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("err", err);
  }
};
