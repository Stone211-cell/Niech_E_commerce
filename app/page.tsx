import Background3D from "@/components/Animation/Background3D";
import HomeAnimation from "@/components/Animation/HomeAnimation";
import ParallaxSection from "@/components/Animation/ParallaxSection";
import ScrollGallery from "@/components/Animation/ScrollGallery";
import Link from "next/link";



// สำหรับประเทศไทย — ค่าธรรมเนียมมาตรฐานคือ 3.65% + ฿10 ต่อรายการ (รวม local + international cards) ตรวจสอบอัตราล่าสุดได้ที่ stripe.com/th/pricing

// ตัวอย่าง
// ถ้าลูกค้าจ่าย ฿1,000:
// ค่าธรรมเนียม ≈ ฿1,000 × 3.65% + ฿10 = ฿46.50
// คุณได้รับ ≈ ฿953.50

//ค่าธรรมเนียม PromptPay ผ่าน Stripe ≈ 1.5% เทียบกับบัตร 3.65% + ฿10 — ประหยัดกว่า


export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 3D Background */}
      <Background3D />

      <HomeAnimation>

        {/* ===== 1. HERO SECTION ===== */}
        <section className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">
          {/* Glow Circles */}
          <div className="home-glow absolute w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[150px] pointer-events-none" />
          <div className="home-glow absolute w-[400px] h-[400px] rounded-full bg-blue-500/15 blur-[120px] translate-x-48 -translate-y-20 pointer-events-none" />
          <div className="home-glow absolute w-[300px] h-[300px] rounded-full bg-pink-500/10 blur-[100px] -translate-x-60 translate-y-32 pointer-events-none" />

          <p className="home-hero-sub text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
            ✦ Premium E-Commerce Experience ✦
          </p>

          <h1 className="home-hero-text text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85]">
            <span className="block bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent">
              NIECH
            </span>
          </h1>

          <p className="home-hero-sub text-xl md:text-2xl text-gray-400 font-light max-w-2xl mt-10 leading-relaxed">
            ประสบการณ์ช้อปปิ้งแห่งอนาคต ดีไซน์ระดับพรีเมียม
            <br />
            สินค้าคัดสรรคุณภาพ เพื่อคุณโดยเฉพาะ
          </p>

          <div className="home-hero-btn flex gap-4 mt-12">
            <Link
              href="/webtwo"
              className="px-8 py-4 bg-white text-black font-bold rounded-full text-sm uppercase tracking-widest hover:bg-gray-200 transition-all"
            >
              เข้าสู่ร้านค้า
            </Link>
            <Link
              href="#about"
              className="px-8 py-4 border border-white/20 text-white font-bold rounded-full text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              เกี่ยวกับเรา
            </Link>
          </div>

          {/* ลูกศร Scroll */}
          <div className="absolute bottom-10 animate-bounce">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>


        {/* ===== 2. ABOUT SECTION ===== */}
        <section id="about" className="about-section relative z-10 py-32 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="about-text space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-purple-400">เกี่ยวกับเรา</p>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                เราสร้าง
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  ประสบการณ์
                </span>
                <br />
                ที่แตกต่าง
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Niech คือแพลตฟอร์ม E-Commerce ที่รวมสินค้าคุณภาพจากทั่วโลก
                พร้อมดีไซน์ที่ทันสมัยและประสบการณ์การใช้งานที่ลื่นไหล
                เราเชื่อว่าการช้อปปิ้งควรเป็นเรื่องสนุกและน่าตื่นเต้น
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                ทีมงานของเราทุ่มเทเพื่อคัดสรรสินค้าที่ดีที่สุด
                ตั้งแต่แฟชั่น อิเล็กทรอนิกส์ ไปจนถึงของตกแต่งบ้าน
                ทุกชิ้นผ่านการเลือกอย่างพิถีพิถันเพื่อลูกค้าของเรา
              </p>
            </div>

            <div className="about-image">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-blue-900/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-[120px]">🏪</span>
                    <p className="text-white/60 text-sm mt-4 tracking-widest uppercase">Since 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 3. SERVICES SECTION ===== */}
        <section className="service-section relative z-10 py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-400 mb-4">สิ่งที่เรามี</p>
              <h2 className="text-4xl md:text-6xl font-black text-white">
                บริการของเรา
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="service-card group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:border-purple-500/30 hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                  <span className="text-3xl">🛒</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">ร้านค้าออนไลน์</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  สินค้ามากกว่า 500+ รายการ พร้อมระบบค้นหาและกรองสินค้าอัจฉริยะ
                </p>
              </div>

              {/* Card 2 */}
              <div className="service-card group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:border-blue-500/30 hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                  <span className="text-3xl">🚚</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">จัดส่งรวดเร็ว</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  ส่งถึงมือคุณภายใน 1-3 วัน พร้อมระบบติดตามพัสดุ Real-time
                </p>
              </div>

              {/* Card 3 */}
              <div className="service-card group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:border-pink-500/30 hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 rounded-2xl bg-pink-500/20 flex items-center justify-center mb-6 group-hover:bg-pink-500/30 transition-colors">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">ปลอดภัย 100%</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  ระบบชำระเงินปลอดภัย มั่นใจทุกการทำธุรกรรม
                </p>
              </div>

              {/* Card 4 */}
              <div className="service-card group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:border-green-500/30 hover:-translate-y-2 duration-300">
                <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                  <span className="text-3xl">💬</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Support 24/7</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  ทีมงานพร้อมช่วยเหลือคุณตลอด 24 ชั่วโมง ทุกวัน
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4. STATS SECTION ===== */}
        <section className="stats-section relative z-10 py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="p-12 rounded-3xl border border-white/10 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="stat-item">
                  <p className="text-5xl md:text-6xl font-black text-white">500+</p>
                  <p className="text-gray-500 text-sm mt-2 uppercase tracking-wider">สินค้าทั้งหมด</p>
                </div>
                <div className="stat-item">
                  <p className="text-5xl md:text-6xl font-black text-white">10K+</p>
                  <p className="text-gray-500 text-sm mt-2 uppercase tracking-wider">ลูกค้า</p>
                </div>
                <div className="stat-item">
                  <p className="text-5xl md:text-6xl font-black text-white">98%</p>
                  <p className="text-gray-500 text-sm mt-2 uppercase tracking-wider">ความพอใจ</p>
                </div>
                <div className="stat-item">
                  <p className="text-5xl md:text-6xl font-black text-white">24/7</p>
                  <p className="text-gray-500 text-sm mt-2 uppercase tracking-wider">บริการ</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PARALLAX ===== */}
        <ParallaxSection />

        {/* ===== 5. SHOWCASE GALLERY ===== */}
        <ScrollGallery />

        {/* ===== 6. HOW IT WORKS ===== */}
        <section className="steps-section relative z-10 py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-green-400 mb-4">ขั้นตอน</p>
              <h2 className="text-4xl md:text-6xl font-black text-white">
                วิธีการ
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> สั่งซื้อ</span>
              </h2>
            </div>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="step-item flex gap-6 items-start p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-black text-white">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">เลือกสินค้า</h3>
                  <p className="text-gray-500 leading-relaxed">
                    เข้าชมร้านค้าของเรา เลือกสินค้าที่ถูกใจ ดูรายละเอียดและรูปภาพแบบ 3D
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="step-item flex gap-6 items-start p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-black text-white">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">เพิ่มลงตะกร้า</h3>
                  <p className="text-gray-500 leading-relaxed">
                    กดเพิ่มสินค้าลงตะกร้า ตรวจสอบรายการ แล้วเลือกจำนวนที่ต้องการ
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="step-item flex gap-6 items-start p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-black text-white">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">ชำระเงิน</h3>
                  <p className="text-gray-500 leading-relaxed">
                    เลือกช่องทางชำระเงินที่สะดวก ทั้งบัตรเครดิต โอนเงิน และ PromptPay
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="step-item flex gap-6 items-start p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-black text-white">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">รับสินค้า</h3>
                  <p className="text-gray-500 leading-relaxed">
                    นั่งรอรับสินค้าที่บ้าน ติดตามสถานะพัสดุได้แบบ Real-time ส่งถึงใน 1-3 วัน
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 7. TESTIMONIALS ===== */}
        <section className="testi-section relative z-10 py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 mb-4">รีวิว</p>
              <h2 className="text-4xl md:text-6xl font-black text-white">
                ลูกค้า
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> พูดว่า</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="testi-card p-8 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-yellow-400 text-lg">★</span>)}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  &quot;สินค้าคุณภาพดีมาก ส่งเร็ว แพ็คเกจสวย ประทับใจมากครับ จะกลับมาซื้ออีกแน่นอน!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">ก</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">กมล ชัยวิทย์</p>
                    <p className="text-gray-600 text-xs">ลูกค้าทั่วไป</p>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="testi-card p-8 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-yellow-400 text-lg">★</span>)}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  &quot;เว็บไซต์สวยมากก ใช้งานง่าย สินค้าตรงปกเลยค่ะ ชอบดีไซน์ของเว็บด้วย ดูพรีเมียมมาก!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-500/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">ส</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">สมหญิง พรรณทอง</p>
                    <p className="text-gray-600 text-xs">ลูกค้าประจำ</p>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="testi-card p-8 rounded-2xl border border-white/10 bg-white/5">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-yellow-400 text-lg">★</span>)}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  &quot;บริการดีเยี่ยม ทีมงานตอบเร็วมาก แก้ปัญหาให้ทันที ราคาไม่แพง คุ้มค่าสุดๆ!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">ว</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">วิชัย ดีดี</p>
                    <p className="text-gray-600 text-xs">ลูกค้าทั่วไป</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 8. BRANDS ===== */}
        <section className="brands-section relative z-10 py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-gray-600 text-sm uppercase tracking-[0.2em] mb-12">แบรนด์ที่เราร่วมงานด้วย</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {["🏷️", "👟", "🎒", "💍", "🧴", "🕶️"].map((emoji, i) => (
                <div key={i} className="brand-item p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-colors flex items-center justify-center">
                  <span className="text-4xl opacity-50 hover:opacity-100 transition-opacity">{emoji}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 9. FAQ SECTION ===== */}
        <section className="faq-section relative z-10 py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-4">FAQ</p>
              <h2 className="text-4xl md:text-5xl font-black text-white">คำถามที่พบบ่อย</h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "สินค้าส่งกี่วันถึง?", a: "สินค้าจัดส่งภายใน 1-3 วันทำการ สำหรับพื้นที่ห่างไกลอาจใช้เวลา 3-5 วัน" },
                { q: "รับประกันสินค้าไหม?", a: "สินค้าทุกชิ้นรับประกันคุณภาพ สามารถเปลี่ยนคืนได้ภายใน 7 วัน" },
                { q: "ชำระเงินช่องทางไหนได้บ้าง?", a: "รองรับบัตรเครดิต/เดบิต, โอนผ่านธนาคาร, PromptPay และ e-Wallet" },
                { q: "มีหน้าร้านไหม?", a: "ขณะนี้เราเป็นร้านค้าออนไลน์ 100% เพื่อให้ราคาดีที่สุดสำหรับลูกค้า" },
                { q: "เว็บ 1 กับ เว็บ 2 ต่างกันยังไง?", a: "เว็บ 1 คือสินค้าชุดแรก เว็บ 2 คือสินค้าชุดที่สอง แยกตามหมวดหมู่เพื่อค้นหาง่ายขึ้น" },
              ].map((item, i) => (
                <div key={i} className="faq-item p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                  <h3 className="text-white font-bold text-lg mb-2">{item.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 10. NEWSLETTER ===== */}
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="p-12 rounded-3xl border border-white/10 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">อยากรู้ข่าวก่อนใคร?</h2>
              <p className="text-gray-500 mb-8">รับส่วนลดและโปรโมชั่นพิเศษก่อนใครเลย</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="กรอกอีเมลของคุณ"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500"
                />
                <button className="px-8 py-4 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-200 transition-colors">
                  สมัคร
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 11. FINAL CTA ===== */}
        <section className="final-section relative z-10 py-32 px-6 text-center">
          <div className="final-cta max-w-4xl mx-auto space-y-8">
            <h2 className="text-5xl md:text-8xl font-black text-white leading-tight">
              พร้อมเริ่มต้น
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                ช้อปปิ้ง?
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              เข้าร่วมกับลูกค้ากว่า 10,000 คนที่ไว้วางใจเรา
              เลือกสินค้าคุณภาพ ราคาดี ส่งไว
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/webone"
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full text-sm uppercase tracking-widest hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
              >
                ร้านค้าเว็บ 1
              </Link>
              <Link
                href="/webtwo"
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full text-sm uppercase tracking-widest hover:from-blue-500 hover:to-cyan-500 transition-all shadow-lg shadow-blue-500/25"
              >
                ร้านค้าเว็บ 2
              </Link>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="relative z-10 border-t border-white/10 py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-white">NIECH</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ประสบการณ์ช้อปปิ้งแห่งอนาคต
                ดีไซน์ระดับพรีเมียม
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">ร้านค้า</h4>
              <div className="flex flex-col gap-2">
                <Link href="/webone" className="text-gray-600 text-sm hover:text-white transition-colors">สินค้าเว็บ 1</Link>
                <Link href="/webtwo" className="text-gray-600 text-sm hover:text-white transition-colors">สินค้าเว็บ 2</Link>
                <Link href="/cart" className="text-gray-600 text-sm hover:text-white transition-colors">ตะกร้าสินค้า</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">ข้อมูล</h4>
              <div className="flex flex-col gap-2">
                <Link href="/policy" className="text-gray-600 text-sm hover:text-white transition-colors">นโยบายของเรา</Link>
                <Link href="/viewpoint" className="text-gray-600 text-sm hover:text-white transition-colors">มุมมองของเรา</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">ติดต่อ</h4>
              <div className="flex flex-col gap-2">
                <p className="text-gray-600 text-sm">hello@niech.shop</p>
                <p className="text-gray-600 text-sm">02-123-4567</p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-700 text-xs">© 2024 NIECH. All rights reserved.</p>
          </div>
        </footer>

      </HomeAnimation>
    </main>
  );
}
