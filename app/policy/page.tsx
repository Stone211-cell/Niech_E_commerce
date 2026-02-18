import PolicyShield from "@/components/Animation/PolicyShield"
import Background3D from "@/components/Animation/Background3D"

const page = () => {
  return (
    <div className="relative min-h-screen">
      <Background3D />

      {/* ===== HERO ===== */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Text */}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-4">✦ Policy ✦</p>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                นโยบาย
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> ของเรา</span>
              </h1>
              <p className="text-gray-500 text-lg mt-6 max-w-lg">
                เราให้ความสำคัญกับความปลอดภัยและความเป็นส่วนตัวของลูกค้าทุกท่าน
              </p>
            </div>

            {/* 3D Shield */}
            <div className="flex justify-center">
              <PolicyShield />
            </div>
          </div>
        </div>
      </section>

      {/* ===== POLICIES ===== */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Privacy */}
          <div className="p-8 rounded-3xl border border-white/10 bg-gray-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <h2 className="text-2xl font-bold text-white">นโยบายความเป็นส่วนตัว</h2>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                เราเก็บรวบรวมข้อมูลส่วนบุคคลของคุณเฉพาะที่จำเป็นต่อการให้บริการเท่านั้น
                ข้อมูลของคุณจะไม่ถูกแชร์กับบุคคลที่สามโดยไม่ได้รับความยินยอม
              </p>
              <p>
                ข้อมูลที่เก็บรวบรวมรวมถึง: ชื่อ, อีเมล, หมายเลขโทรศัพท์, และที่อยู่สำหรับจัดส่ง
                เราใช้การเข้ารหัส SSL เพื่อปกป้องข้อมูลของคุณ
              </p>
            </div>
          </div>

          {/* Refund */}
          <div className="p-8 rounded-3xl border border-white/10 bg-gray-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h2 className="text-2xl font-bold text-white">นโยบายการคืนเงิน</h2>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                คุณสามารถขอคืนเงินได้ภายใน 30 วันนับจากวันที่ได้รับสินค้า
                สินค้าต้องอยู่ในสภาพสมบูรณ์และไม่ผ่านการใช้งาน
              </p>
              <p>
                การคืนเงินจะดำเนินการภายใน 7-14 วันทำการหลังจากได้รับสินค้าคืน
                ค่าจัดส่งสำหรับการคืนสินค้าจะเป็นความรับผิดชอบของลูกค้า ยกเว้นกรณีสินค้ามีตำหนิ
              </p>
            </div>
          </div>

          {/* Shipping */}
          <div className="p-8 rounded-3xl border border-white/10 bg-gray-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <span className="text-2xl">🚚</span>
              </div>
              <h2 className="text-2xl font-bold text-white">นโยบายการจัดส่ง</h2>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                เราจัดส่งสินค้าทั่วประเทศไทย โดยใช้เวลาจัดส่ง 1-3 วันทำการ
                ฟรีค่าจัดส่งสำหรับคำสั่งซื้อที่มียอดรวมตั้งแต่ ฿500 ขึ้นไป
              </p>
              <p>
                คุณสามารถติดตามสถานะพัสดุได้ผ่านระบบของเรา
                หากพัสดุเสียหายระหว่างการจัดส่ง กรุณาติดต่อเราภายใน 48 ชั่วโมง
              </p>
            </div>
          </div>

          {/* Terms */}
          <div className="p-8 rounded-3xl border border-white/10 bg-gray-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h2 className="text-2xl font-bold text-white">เงื่อนไขการใช้บริการ</h2>
            </div>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                การใช้งานเว็บไซต์ Niech Shop ถือว่าคุณยอมรับเงื่อนไขการใช้บริการทั้งหมด
                เราขอสงวนสิทธิ์ในการเปลี่ยนแปลงราคาและเงื่อนไขโดยไม่ต้องแจ้งให้ทราบล่วงหน้า
              </p>
              <p>
                ห้ามใช้เว็บไซต์เพื่อวัตถุประสงค์ที่ผิดกฎหมาย
                เราขอสงวนสิทธิ์ในการระงับบัญชีที่ละเมิดเงื่อนไขการใช้บริการ
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
export default page