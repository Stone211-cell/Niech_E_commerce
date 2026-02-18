import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Image from "next/image";

export function PerspectiveCard() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/images/BannerRoll-On.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/images/BannerRoll-On.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/images/BannerRoll-On.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/images/BannerRoll-On.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/images/BannerRoll-On.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

type Viewpointtype = {
  texthead: string;
  des: string;
  scr: string;
  cls?: string;
  ty?: string;
};

export const ViewpointCardL = ({ texthead, des, scr, cls, ty }: Viewpointtype) => {
  return (
    <div className={`vp-card-left mx-auto w-full max-w-4xl ${cls}`}>
      <div className="flex flex-col md:flex-row md:justify-center justify-start md:gap-8 p-6 md:p-8 rounded-2xl border border-white/10 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-900 transition duration-300">
        {/* Image */}
        <div className="relative w-full md:w-2/4 h-72 md:h-80 rounded-xl overflow-hidden">
          <Image
            src={scr}
            alt={texthead}
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-start pt-5">
          <h2 className="text-2xl font-bold text-white">{texthead}</h2>
          <p className="text-purple-400 text-sm mt-1">{ty}</p>
          <p className="text-gray-400 leading-relaxed text-sm mt-4">{des}</p>
        </div>
      </div>
    </div>
  );
};

export const ViewpointCardR = ({ texthead, des, scr, cls, ty }: Viewpointtype) => {
  return (
    <div className={`vp-card-right mx-auto w-full max-w-4xl ${cls}`}>
      <div className="flex flex-col-reverse md:flex-row md:justify-center justify-start md:gap-8 p-6 md:p-8 rounded-2xl border border-white/10 bg-gray-900/80 backdrop-blur-sm hover:bg-gray-900 transition duration-300">
        {/* Text */}
        <div className="flex-1 text-start pt-5">
          <h2 className="text-2xl font-bold text-white">{texthead}</h2>
          <p className="text-blue-400 text-sm mt-1">{ty}</p>
          <p className="text-gray-400 leading-relaxed text-sm mt-4">{des}</p>
        </div>

        {/* Image */}
        <div className="relative w-full md:w-2/4 h-72 md:h-80 rounded-xl overflow-hidden">
          <Image
            src={scr}
            alt={texthead}
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </div>
  );
};