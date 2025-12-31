"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ReviewProduct from "../ProductComponents/ReviewProduct";
import Link from "next/link";
import { PerspectiveCard } from "../Card/PerspectiveCard";
import { CardReviewOne } from "../Card/ReviewCard";
import Mainpage1 from "../Home/Mainhomepage";

gsap.registerPlugin(ScrollTrigger);

export default function SlideContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>("section");

    gsap.to(sections, {
      yPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: true,
        snap: 1 / (sections.length - 1),
        end: () => `+=${window.innerHeight * sections.length}`,
      },
    });
  }, {scope:containerRef});

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      <section className="h-screen">

        <Mainpage1 />
      </section>
      <section className="h-screen">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, accusamus.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-7">
            <div className="text-black my-15">
              <h2 className="text-4xl">hellow</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              <p className="text-md mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, accusamus.
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
      </section>
      <section className="h-screen">
        {/* product review*/}

        <div className="flex flex-row justify-between w-full">
          <h2 className="text-3xl mb-4">สินค้าของเรา </h2>

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


      <section className="h-screen">
        {" "}
        <div className="text-6xl text-center mx-15">มุมมองจาก</div>
        <div>
          <PerspectiveCard />
        </div>
      </section>


      <section className="flex  justify-center ">
         <CardReviewOne />
        
       </section>
      <section className="h-screen">

      </section>
    </div>
  );
}
