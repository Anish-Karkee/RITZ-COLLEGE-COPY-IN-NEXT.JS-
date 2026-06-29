import React from 'react'
import { Phone, Mail } from 'lucide-react'
import { Button } from '../ui/button'
const Navbar = () => {
  return (
    <>
      <div className=" bg-blue-900 w-screen flex text-white h-12 ">
      <div className="w-full flex justify-between items-center px-18">
        {/* telephone part  */}
        <div className='flex items-center gap-2'>
            <Phone size={18}/>
            <span>025-587251</span>
        </div>

        {/*Mail part */}
        <div className='flex items-center gap-2'>
            <Mail size={18}/>
            <span>ritzcollegeofhm@gmail.com</span>
        </div>

        {/*Right part */}
        <Button className='bg-white text-blue-900 px-4 py-1 rounded font-medium hover:bg-gray-100'>
            Apply Now
        </Button>





      </div>
      </div>
    </>
  )
}

export default Navbar
