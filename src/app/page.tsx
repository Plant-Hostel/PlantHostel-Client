import CommonHeader from "@/components/common/CommonHeader";
import MyPlant from "@/components/main/myplant/MyPlant";
import Bell from "@/images/main/Bell.svg";
import Settings from "@/images/main/Settings.svg";
import "@/style/mainswiper.css";

export default function Home() {
  return (
    <div>
      <CommonHeader
        left="PLANT HOSTEL"
        right={
          <div className="flex justify-end gap-4">
            <Bell />
            <Settings />
          </div>
        }
        className="shadow-md backdrop-blur-sm -mx-5 pl-5 pr-4 py-4 mb-5"
      />
      <MyPlant />
    </div>
  );
}
