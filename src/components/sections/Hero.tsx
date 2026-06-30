import Image from "next/image"
import LAND1 from "../../../public/images/landing1.jpg"

const Hero = () => {
  return (
    <>
    <div>
    <section className="w-full ">
    <div className="relative h-screen overflow-hidden">
            <Image 
            src={LAND1}
            alt="image1"
            className="object-cover"
            />
    </div>
    </section>

    </div>
    </>
  )
}

export default Hero
