"use client";


import { Phone, Mail } from 'lucide-react'
import { Button } from '../ui/button'
const Topbar = () => {
  return (
    <>
      <div className=" bg-[#1100AB] w-full flex text-white h-12 ">
      <div className="w-full flex justify-between items-center text-xl px-18">
        {/* telephone part  */}
        <div className='flex items-center gap-2'>
            <Phone size={18}/>
            <span>025-587251</span>
        </div>

        {/*Mail part */}
        <div className='flex items-center gap-2 cursor-pointer'>
            <Mail size={18}/>
            <span>ritzcollegeofhm@gmail.com</span>
        </div>

        {/*Right part */}
        <Button className='bg-white border-white border-2 text-blue-900 px-4 py-1 text-xl rounded font-medium cursor-pointer hover:bg-blue-800 hover:text-white'>
            Apply Now
        </Button>





      </div>
      </div>
    </>
  )
}

export default Topbar
