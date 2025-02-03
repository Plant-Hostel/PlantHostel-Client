import CommonHeader from "@/components/common/CommonHeader";
import BannerSection from "@/components/main/BannerSection";
import MyPlant from "@/components/main/myplant/MyPlant";
import PopularButlerItem from "@/components/main/store/PopularButlerItem";
import PopularPlant from "@/components/main/store/PopularPlant";
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
      {/* 나의 반려식물 */}
      <MyPlant />

      {/* 식집사 인기 필수템 */}
      <PopularButlerItem />

      {/* 인기 식물 */}
      <PopularPlant />

      {/* 병원 예약 배너 */}
      <BannerSection />
    </div>
  );
}
