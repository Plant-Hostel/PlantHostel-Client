import { Member } from "@/types/member";
import axios from "axios";

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
    return response.data; // JSON 데이터를 반환
  } catch (err) {
    console.error("err", err);
  }
};
