import Image from "next/image"

const ReviewProduct = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between items-center">

        <div className="my-4">
            
            <Image           src="/images/BannerRoll-On.jpg" // เอารูปไว้ใน /public
              alt="รูปตัวอย่าง"
              width={500}
              height={1700}/>
              <div>
                <h2>สินค้า....</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis!</p>
              </div>
        </div>
        <div className="my-4">
            
            <Image           src="/images/BannerRoll-On.jpg" // เอารูปไว้ใน /public
              alt="รูปตัวอย่าง"
              width={500}
              height={1700}/>
              <div>
                <h2>สินค้า....</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis!</p>
              </div>
        </div>
        <div className="my-4">
            
            <Image           src="/images/BannerRoll-On.jpg" // เอารูปไว้ใน /public
              alt="รูปตัวอย่าง"
              width={500}
              height={1700}/>
              <div>
                <h2>สินค้า....</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis!</p>
              </div>

              
        </div>

                <div className="my-4">
            
            <Image           src="/images/BannerRoll-On.jpg" // เอารูปไว้ใน /public
              alt="รูปตัวอย่าง"
              width={500}
              height={1700}/>
              <div>
                <h2>สินค้า....</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veritatis!</p>
              </div>

              
        </div>
    </div>
  )
}
export default ReviewProduct