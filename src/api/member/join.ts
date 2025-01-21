import { Member } from "@/types/member";
import axios from "axios";

//회원가입
export const handleJoin = async (memberData: Member) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/members/join`,
      { ...memberData },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error("err", err);
  }
};
