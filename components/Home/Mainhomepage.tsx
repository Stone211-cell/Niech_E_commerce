import Image from "next/image"
import { PerspectiveCard } from "../Card/PerspectiveCard";
import { CardReviewOne } from "../Card/ReviewCard";


 const Mainpage1 = () => {
  return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
              <div className="max-w-6xl w-full grid md:grid-cols-2 items-center gap-8 p-8">
                {/* ฝั่งซ้าย */}
                <div>
                  <h2 className="text-sm font-medium text-gray-700">
                    บริษัทแหน่งนวัตกรรม
                  </h2>
                  <h1 className="text-4xl font-bold text-black mt-2 leading-tight">
                    การสนับสนุน
                    <br />
                    การขาย
                  </h1>
                  <p className="text-gray-600 mt-4">
                    ทีมขายที่ไม่สร้างรายได้ของเราทำให้แน่ใจว่ากระบวนการขายดำเนินไปอย่างราบรื่นและมีประสิทธิภาพ
                  </p>
                  <button
                    className="mt-6 px-6 py-3 bg-green-800 text-white rounded hover:bg-green-700   transition-all duration-300 ease-in-out 
               transform hover:scale-105 hover:shadow-lg"
                  >
                    เรียนรู้เพิ่มเติม
                  </button>
                </div>
    
                {/* ฝั่งขวา */}
                <div className="relative">
                  {/* เส้นขอบสีเขียว */}
                  <div className="absolute left-0 top-0 h-[90%] w-2.5 bg-green-800 rounded-xl"></div>
                  <div className="absolute  top-0 w-full h-2.5 bg-green-800 rounded"></div>
                  {/* รูป */}
                  <div className="overflow-hidden rounded-br-[40px] ml-2">
                    <Image
                      src="/images/BannerRoll-On.jpg"
                      alt="Laptop"
                      className="w-full h-full object-cover"
                      width={500}
                      height={700}
                    />
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Mainpage1

export const mainpage2 = () => {
  return (
    <div>mainpage</div>
  )
}
