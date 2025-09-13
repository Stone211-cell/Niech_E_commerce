import {
  ViewpointCardL,
  ViewpointCardR,
} from "@/components/Card/PerspectiveCard";

const page = () => {
  return (
    <div>
      <div className=" my-5">
        <ViewpointCardL
          texthead="บทความ"
          des="สวัสดีครับ ทดสอบข้อความ ระเบียบ ตัวเว็บไซต์ยังมีบัค เดียวผมมาเก็บงานให้ครบทุกจุด"
          ty="การดูแลลูกน้อย"
          scr="/images/BannerRoll-On.jpg"
        />
      </div>
      <div className=" my-5">
        <ViewpointCardL
          texthead="บทความ"
          des="สวัสดีครับ ทดสอบข้อความ ระเบียบ ตัวเว็บไซต์ยังมีบัค เดียวผมมาเก็บงานให้ครบทุกจุด"
          ty="การดูแลลูกน้อย"
          scr="/images/BannerRoll-On.jpg"
        />
      </div>
      <div className=" my-5">
        <ViewpointCardR
          texthead="บทความ"
          des="สวัสดีครับ ทดสอบข้อความ ระเบียบ ตัวเว็บไซต์ยังมีบัค เดียวผมมาเก็บงานให้ครบทุกจุด"
          ty="การดูแลลูกน้อย"
          scr="/images/BannerRoll-On.jpg"
        />
      </div>
    </div>
  );
};
export default page;
