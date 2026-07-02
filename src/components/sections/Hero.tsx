
import { Button } from "../ui/button"
import Carousel from "./Carousel"
import Courses from "./Courses"

const Hero = () => {
  return (
    <>
    <div>
    <section className="w-full ">
    <div className="relative h-screen overflow-hidden">
      <Carousel/>
    </div>
    
    {/*Button */}
    <div className="absolute bottom-1 left-1/2 -translate-x-1/2" >
    <Button className="bg-blue-700 hover:bg-white hover:text-black text-white px-10 py-6 rounded-2xl text-2xl font-medium transition duration-300 shadow-xl ">
      Read More
    </Button>
    </div>
    </section>


    {/*Courses */}
    <Courses/>
    </div>
    </>
  )
}

export default Hero
