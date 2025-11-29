import { PerspectiveCard } from "@/components/Card/PerspectiveCard";
import { CardReviewOne } from "@/components/Card/ReviewCard";
import ReviewProduct from "@/components/ProductComponents/ReviewProduct";
import Image from "next/image";
import Link from "next/link";


// pages/index.js
export default function Home() {
  return (
    <>
    
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

      <div className="text-6xl text-center my-15">เรื่องราว</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-15">
        <div>
          <div className="my-15">
            <Image
              src="/images/BannerRoll-On.jpg" // เอารูปไว้ใน /public
              alt="รูปตัวอย่าง"
              width={500}
              height={700}
              priority
            />
          </div>
          <div className="text-black">
            <h2 className="text-4xl">hellowwwww</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            <p className="text-md mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              accusamus.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-7">
          <div className="text-black my-15">
            <h2 className="text-4xl">hellow</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            <p className="text-md mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              accusamus.
            </p>
          </div>

          <div>
            <Image
              src="/images/BannerRoll-On.jpg" // เอารูปไว้ใน /public
              alt="รูปตัวอย่าง"
              width={500}
              height={1700}
            />
          </div>
        </div>

        <div className="h-80">samkamkmsamk</div>
      </div>

      {/* product review*/}

      <section className="mx-10">
        <div className="flex flex-row justify-between w-full">
          <h2 className="text-3xl mb-4">
            สินค้าของเรา{" "}

          </h2>

                      <Link
              href={"#"}
              className="  text-end mr-0 text-xl rounded-2xl px-2 py-2 bg-green-800 text-white  hover:bg-green-700   transition-all duration-300 ease-in-out 
           transform hover:scale-105 hover:shadow-lg "
            >
              ดูทั้งหมด
            </Link>

            
        </div>

        <ReviewProduct />


      </section>

      <div className="text-6xl text-center mx-15">มุมมองจาก</div>
      <section><PerspectiveCard /></section>

      <section className="flex  justify-center ">
         <CardReviewOne />
        
       </section>
  
    </>
  );
}
