import {
  ViewpointCardL,
  ViewpointCardR,
} from "@/components/Card/PerspectiveCard";
import ViewpointAnimation from "@/components/Animation/ViewpointAnimation";
import Background3D from "@/components/Animation/Background3D";

const page = () => {
  return (
    <div className="relative min-h-screen">
      <Background3D />

      <ViewpointAnimation>

        {/* ===== HERO ===== */}
        <section className="relative z-10 py-32 px-6 text-center">
          <div className="vp-hero max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-6">✦ Our Viewpoint ✦</p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
              มุมมอง
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> ของเรา</span>
            </h1>
            <p className="text-gray-500 text-lg mt-6 max-w-xl mx-auto">
              เรื่องราว แนวคิด และบทความที่เราอยากแบ่งปัน
            </p>
          </div>
        </section>

        {/* ===== ARTICLES ===== */}
        <section className="relative z-10 px-6 space-y-12 pb-32">

          <ViewpointCardL
            texthead="การดูแลผิวในฤดูร้อน"
            des="เมื่ออากาศร้อน ผิวของเราต้องการการดูแลเป็นพิเศษ บทความนี้จะแนะนำวิธีการดูแลผิวที่ถูกต้องเพื่อให้ผิวสุขภาพดี ชุ่มชื้น และปลอดภัยจากแสงแดด ตั้งแต่การเลือกครีมกันแดดที่เหมาะสม ไปจนถึงอาหารที่ช่วยบำรุงผิว"
            ty="สุขภาพ & ความงาม"
            scr="/images/BannerRoll-On.jpg"
          />

          <ViewpointCardR
            texthead="เทรนด์แฟชั่น 2025"
            des="อัพเดทเทรนด์แฟชั่นล่าสุดที่กำลังมาแรง ไม่ว่าจะเป็นสีที่ฮิต แพทเทิร์นที่น่าจับตามอง และสไตล์การแต่งตัวที่ดาราคนดังทั่วโลกเลือกใช้ พร้อมเคล็ดลับการมิกซ์แอนด์แมทช์ให้ดูดีทุกโอกาส"
            ty="แฟชั่น & สไตล์"
            scr="/images/BannerRoll-On.jpg"
          />

          <ViewpointCardL
            texthead="เคล็ดลับการช้อปออนไลน์"
            des="ช้อปออนไลน์อย่างไรให้คุ้มค่าและปลอดภัย เราจะแนะนำเทคนิคการเปรียบเทียบราคา การอ่านรีวิว และวิธีหลีกเลี่ยงการถูกหลอก รวมถึงช่วงเวลาที่ดีที่สุดในการซื้อของเพื่อให้ได้ราคาที่ดีที่สุด"
            ty="ไลฟ์สไตล์"
            scr="/images/BannerRoll-On.jpg"
          />

          <ViewpointCardR
            texthead="ของตกแต่งบ้านสไตล์มินิมอล"
            des="มินิมอลไม่ได้แปลว่าเรียบจืด แต่คือความสวยงามที่เรียบง่ายและลงตัว เราจะพาชมไอเดียการตกแต่งบ้านทั้งห้องนอน ห้องนั่งเล่น และห้องทำงาน ให้ดูดี มีสไตล์ ด้วยงบประมาณที่ไม่บานปลาย"
            ty="บ้าน & ที่อยู่อาศัย"
            scr="/images/BannerRoll-On.jpg"
          />

          <ViewpointCardL
            texthead="การดูแลลูกน้อย"
            des="คู่มือสำหรับคุณพ่อคุณแม่มือใหม่ ตั้งแต่การเลือกผลิตภัณฑ์ที่ปลอดภัยสำหรับเด็ก การเตรียมอาหารเสริม ไปจนถึงกิจกรรมที่ส่งเสริมพัฒนาการ พร้อมคำแนะนำจากผู้เชี่ยวชาญด้านเด็กและครอบครัว"
            ty="ครอบครัว & เด็ก"
            scr="/images/BannerRoll-On.jpg"
          />

          <ViewpointCardR
            texthead="Gadget น่าซื้อประจำเดือน"
            des="รวม Gadget และอุปกรณ์เสริมที่น่าสนใจ ทั้ง Earbuds, Smartwatch, Power Bank และ Accessories อื่นๆ ที่ช่วยอัพเกรดไลฟ์สไตล์ของคุณให้สะดวกสบายยิ่งขึ้น พร้อมรีวิวจากทีมงาน Niech"
            ty="เทคโนโลยี"
            scr="/images/BannerRoll-On.jpg"
          />
        </section>

        {/* ===== CEO / PRESIDENT SPOTLIGHT ===== */}
        <section className="relative z-10 py-32 px-6">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-4">✦ Message from CEO ✦</p>
              <h2 className="text-4xl md:text-6xl font-black text-white">
                สารจาก
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> ประธานบริษัท</span>
              </h2>
            </div>

            {/* CEO Card */}
            <div className="vp-card-left relative overflow-hidden rounded-3xl border border-white/10">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-black to-amber-900/20" />
              <div className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}
              />

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Photo side */}
                <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-800/60 via-black/40 to-amber-900/30" />
                  {/* CEO portrait placeholder — large prominent */}
                  <div className="absolute inset-0 flex items-end justify-center">
                    <div className="relative">
                      <div className="w-80 h-[500px] bg-gradient-to-t from-black via-gray-800/50 to-gray-700/30 rounded-t-full flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-[120px] block mb-4">👤</span>
                          <div className="w-20 h-1 bg-amber-500 mx-auto" />
                        </div>
                      </div>
                      {/* Glow behind person */}
                      <div className="absolute -inset-10 bg-purple-600/10 blur-[60px] rounded-full -z-10" />
                    </div>
                  </div>
                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
                </div>

                {/* Text side */}
                <div className="relative p-10 md:p-16 flex flex-col justify-center">
                  {/* Quote mark */}
                  <span className="text-8xl text-amber-500/20 font-serif absolute top-6 left-10">&ldquo;</span>

                  <div className="space-y-6 relative">
                    <p className="text-white/90 text-lg md:text-xl leading-relaxed italic">
                      &ldquo;ผมเชื่อว่าทุกคนสมควรได้รับสิ่งที่ดีที่สุดในราคาที่เป็นธรรม
                      Niech เกิดขึ้นจากความตั้งใจที่จะเป็นตัวกลาง
                      เชื่อมต่อสินค้าคุณภาพกับผู้คนทั่วทุกมุมของประเทศ
                    </p>
                    <p className="text-white/90 text-lg md:text-xl leading-relaxed italic">
                      เราไม่ได้แค่ขายสินค้า แต่เราสร้างประสบการณ์
                      และทุกความเห็นของลูกค้าคือแรงผลักดันให้เราพัฒนาต่อไป&rdquo;
                    </p>

                    {/* Divider */}
                    <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mt-8" />

                    {/* Name */}
                    <div className="pt-4">
                      <h3 className="text-2xl md:text-3xl font-black text-white">คุณ นิช</h3>
                      <p className="text-amber-400 text-sm mt-1">Founder & CEO — NIECH</p>
                      <p className="text-gray-500 text-xs mt-2 uppercase tracking-wider">Since 2024</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6 mt-4 border-t border-white/10">
                      <div>
                        <p className="text-2xl font-black text-white">3+</p>
                        <p className="text-gray-500 text-xs">ปีประสบการณ์</p>
                      </div>
                      <div>
                        <p className="text-2xl font-black text-white">500+</p>
                        <p className="text-gray-500 text-xs">สินค้าคุณภาพ</p>
                      </div>
                      <div>
                        <p className="text-2xl font-black text-white">10K+</p>
                        <p className="text-gray-500 text-xs">ลูกค้าเชื่อมั่น</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== QUOTE ===== */}
        <section className="relative z-10 py-24 px-6">
          <div className="vp-quote max-w-3xl mx-auto text-center p-12 rounded-3xl border border-white/10 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
            <span className="text-5xl mb-6 block">💡</span>
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed italic">
              &ldquo;เราเชื่อว่าสิ่งดีๆ ควรถูกแบ่งปัน
              <br />
              และทุกมุมมองมีคุณค่า&rdquo;
            </p>
            <p className="text-gray-500 mt-6 text-sm uppercase tracking-wider">— ทีมงาน NIECH</p>
          </div>
        </section>

      </ViewpointAnimation>
    </div>
  );
};
export default page;
